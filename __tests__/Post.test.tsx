import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getPage } from 'next-page-tester'
import userEvent from '@testing-library/user-event'
import { initTestHelpers } from 'next-page-tester'

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

describe('Blog detail page', () => {
  it('Should render detailed content of book', async () => {
    const { page } = await getPage({
      route: '/posts/book',
    })
    render(page)
    expect(await screen.findByText('読書')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('back-index'))
    expect(await screen.findByText('ポートフォリオ')).toBeInTheDocument()
  })
})
