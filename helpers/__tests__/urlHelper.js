import HOST_URL from "../../constatns/url";
import { getUrl } from "../util";

describe("get url", () => {
  it("HOSTの後にPATHが付く", () => {
    expect(getUrl("api/v1/users")).toBe(`${HOST_URL}/api/v1/users`);
  });
});
