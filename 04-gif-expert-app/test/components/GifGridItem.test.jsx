import { render } from "@testing-library/react";
import GifGridItem from "../../src/components/GifGridItem";

describe("Prueba de GifGridItem", () => {
  const title = "Un título";
  const url = "https://localhost/algo.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
