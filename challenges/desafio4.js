db.produtos.find(
  { vendidos: { $gte: 50, $lt: 100 } },
  { _id: 0, nome: 1, vendidos: 1 },
).sort({ vendidos: 1 });