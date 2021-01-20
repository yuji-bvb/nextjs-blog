import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getPage } from 'next-page-tester'
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

describe('Blog page', () => {
  it('Should render the list of blogs pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)
    expect(await screen.findByText('ポートフォリオ')).toBeInTheDocument()
    expect(screen.getByText('TypeScript導入')).toBeInTheDocument()
    expect(screen.getByText('December 21, 2020')).toBeInTheDocument()
  })
})
