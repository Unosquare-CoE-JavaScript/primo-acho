import { render, screen } from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";

import { rest } from "msw";
import { server } from "../../../mocks/server";

test("handles error", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<OrderEntry />);
  const alerts = await screen.findAllByRole("alert");

  expect(alerts[0]).toBeInTheDocument();
});
