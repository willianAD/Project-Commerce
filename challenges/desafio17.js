// db.produtos.updateMany(
//   {},
//   { $set: { resumoProdutos: {
//     franquia: "McDonalds",
//     totalProdutos: db.produtos.countDocuments({}),
//   } } },
// );
// db.produtos.find({}, { _id: 0, "resumoProdutos.franquia": 1, "resumoProdutos.totalProdutos": 1 });