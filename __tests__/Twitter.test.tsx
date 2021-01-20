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
    'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          statuses: [
            {
              id: 1,
              text: 'text1',
            },
            {
              id: 2,
              text: 'text2',
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

describe('Twitter by Link', () => {
  it('Should route to twitter page in link', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)
    userEvent.click(screen.getByTestId('twitter-nav'))
    expect(await screen.findByText('text1')).toBeInTheDocument()
    expect(await screen.findByText('text2')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('back-index'))
    expect(await screen.findByText('ポートフォリオ')).toBeInTheDocument()
  })
})
