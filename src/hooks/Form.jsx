import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const emailHandler = (event) => setEmail(event.target.value);
  const quantityHandler = (event) => setQuantity(event.target.value);
  const commentHandler = (event) => setComment(event.target.value);
  const paymentHandler = (event) => setPayment(event.target.value);
  const shippingHandler = (event) => setShipping(event.target.value);

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={emailHandler}
        placeholder="email"
      />
      <p> Email: {email}</p>

      <input
        type="number"
        value={quantity}
        onChange={quantityHandler}
        placeHolder="quantity"
      />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={commentHandler}
        placeholder="comment"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={paymentHandler}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="PayPal">PayPal</option>
        <option value="GiftCard">Gift Card</option>
      </select>
      <p>Payment Method: {payment}</p>

      <label>
        <input
          type="radio"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={shippingHandler}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="delivry"
          checked={shipping === "delivry"}
          onChange={shippingHandler}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default Form;
