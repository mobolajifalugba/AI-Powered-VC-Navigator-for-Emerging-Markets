document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const city = formData.get('city');
    const totalFunding = parseFloat(formData.get('total-funding'));
    const yearFounded = parseInt(formData.get('year-founded'));
    const debtFinancing = parseFloat(formData.get('debt-financing'));
    const ventureFunding = parseFloat(formData.get('venture-funding'));
    const seedFunding = parseFloat(formData.get('seed-funding'));
    const angelFunding = parseFloat(formData.get('angel-funding'));
    const grant = parseFloat(formData.get('grant'));
    const convertibleNote = parseFloat(formData.get('convertible-note'));
    const privateEquity = parseFloat(formData.get('private-equity'));
    const undisclosedFunding = parseFloat(formData.get('undisclosed-funding'));
    const market = formData.get('market');
    const country = formData.get('country');
    const fundingRounds = parseInt(formData.get('funding-rounds'));
    const firstFundingDate = formData.get('first-funding-date');
    const lastFundingDate = formData.get('last-funding-date');
    const firstFundingReceived = parseFloat(formData.get('first-funding-received'));
    const secondFundingReceived = parseFloat(formData.get('second-funding-received'));
    const thirdFundingReceived = parseFloat(formData.get('third-funding-received'));
    const fourthFundingReceived = parseFloat(formData.get('fourth-funding-received'));
    const fifthFundingReceived = parseFloat(formData.get('fifth-funding-received'));
    const sixthFundingReceived = parseFloat(formData.get('sixth-funding-received'));

    // Mapping dictionaries
    const marketMapping = {
        "Software": 562,
        "Biotechnology": 53,
        "Mobile": 380,
        "Curated Web": 137,
        "Enterprise Software": 211,
        "Health Care": 273,
        "E-Commerce": 180,
        "Hardware + Software": 272,
        "Advertising": 7,
        "Clean Technology": 82,
        "Health and Wellness": 276
    };

    const cityMapping = {
        "San Francisco": 1486,
        "New York": 1148,
        "Palo Alto": 1216,
        "Austin": 81,
        "Seattle": 1540,
        "Mountain View": 1106,
        "Chicago": 313,
        "Los Angeles": 935,
        "Boston": 170,
        "Vancouver": 1754
    };

    const countryMapping = {
        "USA": 1,
        "Canada": 0
    };

    // Prepare data for prediction
    const predictionData = {
        "city": cityMapping[city],
        "total_funding": totalFunding,
        "year_founded": yearFounded,
        "debt_financing": debtFinancing,
        "venture_funding": ventureFunding,
        "seed_funding": seedFunding,
        "angel_funding": angelFunding,
        "grant": grant,
        "convertible_note": convertibleNote,
        "private_equity": privateEquity,
        "undisclosed_funding": undisclosedFunding,
        "market": marketMapping[market],
        "country_code": countryMapping[country],
        "funding_rounds": fundingRounds,
        "first_funding_date": firstFundingDate,
        "last_funding_date": lastFundingDate,
        "first_funding_received": firstFundingReceived,
        "second_funding_received": secondFundingReceived,
        "third_funding_received": thirdFundingReceived,
        "fourth_funding_received": fourthFundingReceived,
        "fifth_funding_received": fifthFundingReceived,
        "sixth_funding_received": sixthFundingReceived
    };

    // Call model API (replace MODEL_ENDPOINT_URL with the actual endpoint URL)
    const MODEL_ENDPOINT_URL = 'https://ai-powered-vc-navigator-for-emerging.onrender.com';
    fetch(MODEL_ENDPOINT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(predictionData)
    })
    .then(response => response.json())
    .then(data => {
        // Display prediction result
        if (data.prediction === 1) {
            alert("Based on the analysis, the model predicts that the startup may face challenges and could potentially close down in the future. While this prediction serves as a cautionary note, it's essential to reassess strategies and explore opportunities for improvement to mitigate risks and enhance the chances of success.");
        } else if (data.prediction === 0) {
            alert("Great news! According to the analysis, the model predicts that the startup is positioned for success. Keep up the momentum and continue pursuing your goals with confidence. Remember to stay agile and adaptive to capitalize on opportunities and maintain growth.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while processing your request. Please try again later.");
    });
});
