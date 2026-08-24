import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShinyText from "./ShinyText";

describe("ShinyText", () => {
  it("keeps one accessible text layer and hides the decorative copy", () => {
    const { container } = render(<ShinyText text="实时价格" />);

    expect(container.querySelector(".shiny-text__base")?.textContent).toBe("实时价格");
    expect(container.querySelectorAll(".shiny-text__shine")).toHaveLength(1);
    expect(container.querySelector(".shiny-text__shine")?.getAttribute("aria-hidden")).toBe("true");
  });

  it("maps animation options to classes and CSS variables without forcing a base color", () => {
    const { container } = render(
      <ShinyText
        text="渠道状态"
        speed={3}
        delay={0.5}
        shineColor="#fefefe"
        spread={135}
        direction="right"
        yoyo
        pauseOnHover
      />,
    );

    const root = container.querySelector<HTMLElement>(".shiny-text");
    expect(root?.classList.contains("shiny-text--right")).toBe(true);
    expect(root?.classList.contains("shiny-text--yoyo")).toBe(true);
    expect(root?.classList.contains("shiny-text--pause-on-hover")).toBe(true);
    expect(root?.style.getPropertyValue("--shiny-text-speed")).toBe("3s");
    expect(root?.style.getPropertyValue("--shiny-text-delay")).toBe("0.5s");
    expect(root?.style.getPropertyValue("--shiny-text-shine")).toBe("#fefefe");
    expect(root?.style.getPropertyValue("--shiny-text-spread")).toBe("135deg");
    expect(root?.style.getPropertyValue("--shiny-text-color")).toBe("");
  });
});
