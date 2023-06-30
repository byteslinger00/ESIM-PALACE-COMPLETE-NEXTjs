const CountryCodes = require('country-code-info');
export const getCountryCode = (countryName: string) => {
    const code = CountryCodes.findCountry({ 'name': countryName });
    if (code)
        return code.a2;
    else return CountryCodes.findCountry({'name': 'Macau'}).a2;
}