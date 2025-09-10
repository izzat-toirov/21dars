import React, { Component } from 'react';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      price: "",
      discount: 0,
      data: [],
      editingItem: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, data, discount, editingItem } = this.state;

    if (Number(price) < 0) {
      return alert("xato");
    }

    if (editingItem) {
      const editingData = data.map((product) =>
        product.id === editingItem.id
          ? { id: editingItem.id, title, price: Number(price), discount: Number(discount) }
          : product
      );

      this.setState({
        data: editingData,
        title: "",
        price: "",
        discount: 0,
        editingItem: null
      });
    } else {
      const products = {
        id: Date.now(),
        title,
        price: Number(price),
        discount: Number(discount)
      };
      this.setState({
        data: [...data, products],
        title: "",
        price: "",
        discount: 0
      });
    }
  };

  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((product) => product.id !== id)
    });
  };

  handleUpdate = (product) => {
    this.setState({
      title: product.title,
      price: product.price,
      discount: product.discount,
      editingItem: product
    });
  };

  render() {
    const { title, price, discount, data, editingItem } = this.state;

    return (
      <div className="flex gap-6 items-start">
        <div className="mb-10 bg-slate-100 p-6 rounded-xl w-[300px] sticky top-24">
          <h2 className="text-xl mb-4">Products</h2>
          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col gap-4"
            action=""
          >
            <input
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
              className="border bg-white border-slate-200 rounded-lg py-2 px-4"
              type="text"
              placeholder="Title"
            />
            <input
              value={price}
              onChange={(e) => this.setState({ price: e.target.value })}
              className="border bg-white border-slate-200 rounded-lg py-2 px-4"
              type="number"
              placeholder="Price"
            />
            <input
              value={discount}
              onChange={(e) => this.setState({ discount: e.target.value })}
              className="border bg-white border-slate-200 rounded-lg py-2 px-4"
              type="number"
              placeholder="Discount"
            />

            <button className="border cursor-pointer hover:opacity-60 border-slate-200 rounded-lg py-2 px-4 bg-white">
              {editingItem ? "Update" : "Create"}
            </button>
          </form>
        </div>

        <div className="flex-1 grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        {data.map((i) => {
          const finalPrice = i.price - (i.price * i.discount / 100);
            return (
              <div className="p-4 bg-slate-100 shadow rounded-xl" key={i.id}>
                <div className="bg-slate-300 h-40 rounded-xl grid place-items-center">
                  <span className="text-3xl text-slate-500">{i.title[0]}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl">{i.title}</h3>
                  <strong className="block my-1 text-gray-800">
                    {i.price} USD
                  </strong>
                  <span className="text-sm text-gray-600">
                    Discount: {i.discount}%
                  </span>
                  <p className="text-lg font-bold text-green-600">
                    {finalPrice.toFixed(2)} USD
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button
                      className="py-0.5 border rounded-lg text-sm flex-1 text-red-500"
                      onClick={() => this.handleDelete(i.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="py-0.5 border rounded-lg text-sm flex-1 text-green-700"
                      onClick={() => this.handleUpdate(i)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
