function showPromoAndBudget() {

    let userInput = Number(document.getElementById("inputBudget").value);
    let discountedPrice = (userInput * 0.2).toFixed(2);

document.getElementById("RecommendedBrands").innerHTML =
    `<div class="container mt-3">
        <div class="container text-center mt-5 bg-success text-white p-5 rounded">

            <h5>Recommended Brands:</h5>

            <button class="btn btn-outline-warning">Acer</button>
            <button class="btn btn-outline-warning">Lenovo</button>
            <button class="btn btn-outline-warning">HP</button>

            <p class="mt-3">
            Eligible Discount: 
            <span class="badge bg-secondary">₱${discountedPrice}</span>
            </p>

        </div>
    </div>`;
}

function storeLocation() {
    document.getElementById("StoreLocations").innerHTML = 

     `<div class="container text-center mt-5 bg-success text-white p-5 rounded">

        <h3>Store Location:</h3>

        <p>4F GH Mall Greenhills Shopping Center, San Juan, Metro Manila</p>
        <p>Cyberzone, SM Marikina, Marcos Highway Marikina City</p>
        <p>Cyberzone 4th Floor, Bldg. B SM Megamall, Mandaluyong City</p>
        <p>Unit 432, 4th Floor, Market! Market! Fort Bonifacio, Taguig</p>
        <p>2nd Floor, North Parking SM Mall of Asia, Bay Area, Manila</p>
        <p>Cyberzone 3rd Floor SM City Fairview, Quezon City</p>
        <p>Unit C33 2nd Flr. SM City Cabanatuan H. Conception Cabanatuan City</p>

      </div>`;
}