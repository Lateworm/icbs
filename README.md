# ICBC Insurance Estimator

Provides an estimate of the base price of ICBC motorcycle insurance

## Running locally

Because ICBS uses modules, simply loading `index.html` from the local filesysten will probably result in a CORS-related error. If that's the case, you can get around it:

1. `npm install http-server -g`
1. `http-server` in the repo directory
1. open `http://127.0.0.1:8080/` in browser

## Sources

- [Basic insurance tariff](https://www.icbc.com/about-icbc/company-info/Documents/bcuc/basic-tariff.pdf)
- [ICBC Autoplan insurance](https://www.icbc.com/autoplan/Documents/autoplan-insurance-brochure.pdf)

## See Also

- [Motorcycles & ICBC Rate Classes](https://airtable.com/universe/expADkoUx9fEDG3oW/motorcycles-and-icbc-rate-classes)