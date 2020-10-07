import { shallow } from "enzyme";
import React from "react";

import SummaryButton from "./SummaryButton";

describe("<SummaryButton />", () => {
  // snapshot tests
  it("renders and matches the snapshot", () => {
    const component = shallow(
      <SummaryButton
        summary="Showing some items"
        label="Show more"
        onClick={() => false}
      />
    );

    expect(component).toMatchSnapshot();
  });

  // unit tests
  it("renders a spinner icon", () => {
    const component = shallow(
      <SummaryButton label="Show more" onClick={() => false} isLoading />
    );

    expect(
      component.find("i").first().hasClass("p-icon--spinner")
    ).toBeTruthy();
  });

  it("can handle click events", () => {
    const onClick = jest.fn();
    const component = shallow(
      <SummaryButton label="Show more" onClick={onClick} />
    );

    component
      .find("a")
      .first()
      .simulate("click", {
        // when shallow rendering enzyme doesn't provide event object to handlers, so we need to mock it
        preventDefault: () => false,
      });
    expect(onClick).toHaveBeenCalled();
  });
});