import mongoose, { Schema } from "mongoose";

const priceSalesSchema = new Schema(
  {
    value: { type: Number, required: false },
    currency: { type: String, required: false },
    formatted: { type: String, required: false },
    decimalPrice: { type: String, required: false },
  },
  { _id: false }
);

const priceSchema = new Schema(
  {
    sales: { type: priceSalesSchema, required: false },
    list: { type: priceSalesSchema, required: false },
    html: { type: String, required: false },
  },
  { _id: false }
);

const productImageSchema = new Schema(
  {
    alt: { type: String },
    url: { type: String, required: false },
    title: { type: String },
  },
  { _id: false }
);

const imagesSchema = new Schema(
  {
    large: [productImageSchema],
    small: [productImageSchema],
  },
  { _id: false }
);

const variationAttributeSchema = new Schema(
  {
    attributeId: { type: String, required: false },
    displayName: { type: String, required: false },
    id: { type: String, required: false },
    swatchable: { type: Boolean, required: false },
    displayValue: { type: String, required: false },
    values: [
      {
        id: { type: String, required: false },
        description: { type: String },
        displayValue: { type: String, required: false },
        value: { type: String, required: false },
        selected: { type: Boolean, required: false },
        selectable: { type: Boolean, required: false },
        url: { type: String, required: false },
      },
    ],
    resetUrl: { type: String, required: false },
  },
  { _id: false }
);

const promotionSchema = new Schema(
  {
    calloutMsg: { type: String, required: false },
    details: { type: String, required: false },
    enabled: { type: Boolean, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    promotionClass: { type: String, required: true },
    rank: { type: Number, required: false },
  },
  { _id: false }
);

const availabilitySchema = new Schema(
  {
    messages: { type: [String], required: true },
    inStockDate: { type: Date, required: false },
  },
  { _id: false }
);

const productSchema = new Schema({
  uuid: { type: String, required: false },
  id: { type: String, required: false },
  productName: { type: String, required: false },
  productTag: { type: String },
  productType: { type: String, required: false },
  brand: { type: String, required: false },
  itemCategory: { type: String, required: false },
  step: { type: Number, required: false },
  ean: { type: String, required: false }, // Assuming EAN can be optional
  productWeight: { type: Number, required: false },
  showProductWeight: { type: Boolean, required: false },
  price: { type: priceSchema, required: false },
  renderedPrice: { type: String, required: false },
  images: { type: imagesSchema, required: false },
  selectedQuantity: { type: Number, required: false },
  minOrderQuantity: { type: Number, required: false },
  maxOrderQuantity: { type: Number, required: false },
  variationAttributes: [variationAttributeSchema],
  longDescription: { type: String, required: false },
  shortDescription: { type: String, required: false },
  rating: { type: Number, required: false }, // Rating may not always be present
  promotions: [promotionSchema],
  quantities: { type: Number, required: false }, // Assuming quantities is a number
  availability: { type: availabilitySchema, required: false },
  available: { type: Boolean, required: false },
  selectedProductUrl: { type: String, required: false },
  readyToOrder: { type: Boolean, required: false },
  online: { type: Boolean, required: false },
  pageTitle: { type: String, required: false },
  pageDescription: { type: String, required: false },
  pageKeywords: { type: String, required: false },
  template: { type: String, required: false },
});

productSchema.set("toJSON", {
  transform: (_document, retObject) => {
    delete retObject.__v;
  },
});

const ProductModel = mongoose.model("Products", productSchema);

export default ProductModel;
