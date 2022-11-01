# Products App

Clone this repository:

`git clone https://github.com/mayoljonathan/products_app`

or download the zip file.

### Steps:

1. cd to the project folder using your editor.
2. Run `npm i` or `yarn`
3. Run the app `npm run start` or `yarn start`

# Exam:

### Technical Requirements:

- Don't use any library/packages except for "fs" (Node.js file system)
- Reading a file should use fs.readFile or fs.readFileSync
- Writing to a file should use fs.writeFile or fs.writeFileSync
- Use TypeScript

## Features:

### 1. Create a product

#### Scenario:

I want to create a product which has a name, a quantity, a unit price, and a unique id attached to it.
I don't want any duplicated products.

#### Note:

Can save a product to a local file (data.json). After successfully saving the product, show an info in the terminal that the product has been added successfully.
When inserting a product, you must also validate if the product's "id" already exist in the local file (data.json). You won't be able to insert products that has the same "id". Show an error in the terminal, if the product you want to add is a duplicate.

### 2. List all products

#### Scenario:

I want to get all products that has available stocks but only shows the information (product's name, unit price and total price) that I want in an descending order (newly added products to old products)

#### Note:

- Get the list of all products that has quantity equal to 1 or more than 1 but only show the information (name, unit_price, total_price) and show the results in the terminal in an descending order (newly added products to old products)

```
name = name of the product
unit_price = price of one item of a product
total_price = total price of a product based from the quantity and unit_price.
```

### 3. Update a product

#### Scenario:

I have some stocks arrived from a particular product, and I want to update that product's quantity and its unit price.

#### Note:

Can only update a product's quantity and unit_price based from the given product id and save it to local file (data.json).
Updating a product that doesn't exist should show an error in the terminal.
After updating the product's quantity and unit_price, show an info in the terminal that product has been updated successfully and also show the list of all products.

### 4. Remove a product

#### Scenario:

I no longer sell this product, so I want to remove it permanently.

#### Note:

Can remove a product given by a product's "id" in the local file (data.json).
Removing a product that doesn't exist should show an error in the terminal.
After removing the product, show an info in the terminal that product has been removed successfully.
