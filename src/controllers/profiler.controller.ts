import express, { Express, Request, Response } from "express";

const balanceProfiler = require(`../profilers/balance.profiler`);

const profilerController = {
  balance: (req: Request, res: Response) => {
    balanceProfiler
      .getWalletInfo(req.body.wallet)
      .then((balanceProfile: any) => {
        return res.json(balanceProfile);
      })
      .catch((e: any) => {
        return res.json(e);
      });
  },
};

module.exports = profilerController;
