import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("Liste af afdelinger");
  res.send("Liste af afdelinger: Jylland, Fyn, Sjælland");
});

router.get("/:region", (req, res) => {
  const region = req.params.region;
  res.send(`Afdeling detaljer for: ${region}`);
});

export { router as departmentsRouter };
