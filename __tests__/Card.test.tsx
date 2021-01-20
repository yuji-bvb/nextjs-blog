import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

initTestHelpers()

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const handlers = [
  rest.get(
    'https://db.ygoprodeck.com/api/v7/randomcard.php',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          card_images: [
            {
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg',
            },
          ],
        })
      )
    }
  ),
]
const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Yugioh by Link', () => {
  it('Should route to card page in link', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)
    userEvent.click(screen.getByTestId('card-nav'))
    expect(await screen.findByText('Todays card')).toBeInTheDocument()
    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.src).toContain(
      'https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg'
    )
    userEvent.click(screen.getByTestId('back-index'))
    expect(await screen.findByText('ポートフォリオ')).toBeInTheDocument()
  })
})
