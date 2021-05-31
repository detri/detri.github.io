import { render } from '@testing-library/react'
import Splash from '../index'

describe('<Splash />', () => {
  it('renders my name', () => {
    expect(render(<Splash />).getAllByRole('heading')[0]).toHaveTextContent('Aaron Dosser')
  })

  it('renders my career', () => {
    expect(render(<Splash />).getAllByRole('heading')[1]).toHaveTextContent('Software Engineer')
  })
})
