import { render } from "@testing-library/react"
import '@testing-library/jest-dom';
import Web from "../../app/page";


describe("Web", () => {
  it("should render a component with page props", () => {
    const { getByText } = render(<Web  />)
    expect(getByText("Test Component")).toBeInTheDocument()
    expect(getByText("Test Page")).toBeInTheDocument()
  })
})
