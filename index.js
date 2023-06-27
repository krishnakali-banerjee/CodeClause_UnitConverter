
var input = document.getElementById('input');
var result = document.getElementById('result');

function convert(select1,inputType,resultType)
{
    var select1 = document.getElementById('select1');
    var inputType = document.getElementById('inputType');
    var resultType = document.getElementById('resultType');
    inputType.innerHTML = "";
    resultType.innerHTML = "";
    if(select1.value == "length")
    {
        var optionArray1 = ['meter|Meter','centimeter|Centimeter','millimeter|Millimeter','kilometer|Kilometer','inches|Inch','feet|Feet'];
        var optionArray2 = ['meter|Meter','centimeter|Centimeter','millimeter|Millimeter','kilometer|Kilometer','inches|Inch','feet|Feet'];
    }
    else if(select1.value == "temperature"){
        var optionArray1 = ['celsius|Celsius','kelvin|Kelvin','fahrenheit|Fahrenheit'];
        var optionArray2 = ['celsius|Celsius','kelvin|Kelvin','fahrenheit|Fahrenheit'];
    }
    else if(select1.value == "area"){
        var optionArray1 = ['sqmt|Square Meter','sqkm|Square Kilometer','sqmile|Square Mile','sqyard|Square Yard','sqft|Square Feet','sqinch|Square Inch','hec|Hectare','acre|Acre'];
        var optionArray2 = ['sqmt|Square Meter','sqkm|Square Kilometer','sqmile|Square Mile','sqyard|Square Yard','sqft|Square Feet','sqinch|Square Inch','hec|Hectare','acre|Acre'];
    }
    else if(select1.value == "volume"){
        var optionArray1 = ['lit|Litre','ml|Millilitre','cubeft|Cubic Feet','cubeinch|Cubic Inch'];
        var optionArray2 = ['lit|Litre','ml|Millilitre','cubeft|Cubic Feet','cubeinch|Cubic Inch'];
    }
    else if(select1.value == "weight"){
        var optionArray1 = ['kg|Kilogram','gm|Gram','mg|Milligram','pound|Pound','ounce|Ounce'];
        var optionArray2 = ['kg|Kilogram','gm|Gram','mg|Milligram','pound|Pound','ounce|Ounce'];
    }
    else if(select1.value == "time"){
        var optionArray1 = ['sec|Second','msec|Millisecond','mcsec|Microsecond','nsec|Nanosecond','min|Minute','hour|Hour','day|Day','week|Week','month|Month','year|Year'];
        var optionArray2 = ['sec|Second','msec|Millisecond','mcsec|Microsecond','nsec|Nanosecond','min|Minute','hour|Hour','day|Day','week|Week','month|Month','year|Year'];
    }
    for(var option1 in optionArray1){
        var pair1 = optionArray1[option1].split("|");
        var newOption1 = document.createElement("option");

        newOption1.value = pair1[0];
        newOption1.innerHTML=pair1[1];
        inputType.options.add(newOption1);
    }
    for(var option2 in optionArray2){
        var pair2 = optionArray2[option2].split("|");
        var newOption2 = document.createElement("option");

        newOption2.value = pair2[0];
        newOption2.innerHTML=pair2[1];
        resultType.options.add(newOption2);
    }
}

input.addEventListener("keyup",func_result);
inputType.addEventListener("change",func_result);
resultType.addEventListener("change",func_result);

// var inputTypeValue = inputType.value;
// var resultTypeValue = resultType.value;

function func_result(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

//METERS

    if(inputTypeValue === "meter" && resultTypeValue === "millimeter"){
        result.value = input.value * 1000;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        result.value = input.value * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = input.value / 1000;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "inches"){
        result.value = input.value * 39.3701;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "feet"){
        result.value = input.value * 3.281;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = input.value ;
    }

//MILLIMETERS

    if(inputTypeValue === "millimeter" && resultTypeValue === "meter"){
        result.value = input.value / 1000;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "centimeter"){
        result.value = input.value / 10;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "kilometer"){
        result.value = input.value / 1000000;
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "inches"){
        result.value = (input.value / 25.4).toFixed(4);
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "feet"){
        result.value = (input.value / 304.8).toFixed(4);
    }
    else if(inputTypeValue === "millimeter" && resultTypeValue === "millimeter"){
        result.value = input.value ;
    }

//CENTIMETERS

    if(inputTypeValue === "centimeter" && resultTypeValue === "millimeter"){
        result.value = input.value * 10;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        result.value = input.value / 100;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        result.value = input.value / 100000;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "inches"){
        result.value = input.value / 2.54;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "feet"){
        result.value = input.value / 30.48;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        result.value = input.value ;
    }

//KILOMETERS

    if(inputTypeValue === "kilometer" && resultTypeValue === "millimeter"){
        result.value = input.value * 1000000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        result.value = input.value * 100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = input.value * 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "inches"){
        result.value = input.value * 39370.1;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "feet"){
        result.value = input.value * 3281;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        result.value = input.value ;
    }

//INCHES

    if(inputTypeValue === "inch" && resultTypeValue === "millimeter"){
        result.value = input.value * 25.4;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "centimeter"){
        result.value = input.value * 2.54;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "meter"){
        result.value = input.value / 39.3701;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "kilometer"){
        result.value = input.value / 39370;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "feet"){
        result.value = input.value / 12;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "inch"){
        result.value = input.value ;
    }

//FEET

    if(inputTypeValue === "feet" && resultTypeValue === "millimeter"){
        result.value = input.value * 304.8;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "centimeter"){
        result.value = input.value * 30.48;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "meter"){
        result.value = input.value / 3.281;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "kilometer"){
        result.value = input.value / 3281;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "inches"){
        result.value = input.value * 12;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "feet"){
        result.value = input.value ;
    }

//CELSIUS

    if(inputTypeValue === "celsius" && resultTypeValue === "kelvin"){
        result.value = parseFloat(input.value) + 273.15;
    }
    else if(inputTypeValue === "celsius" && resultTypeValue === "fahrenheit"){
        result.value = (parseFloat(input.value) * (9/5))+32;
    }
    else if(inputTypeValue === "celsius" && resultTypeValue === "celsius"){
        result.value = input.value ;
    }

//FAHRENHEIT

    if(inputTypeValue === "fahrenheit" && resultTypeValue === "kelvin"){
        result.value = parseFloat((input.value-32)*(5/9))+273.15;
    }
    else if(inputTypeValue === "fahrenheit" && resultTypeValue === "celsius"){
        result.value = (parseFloat(input.value-32)*(5/9));
    }
    else if(inputTypeValue === "fahrenheit" && resultTypeValue === "fahrenheit"){
        result.value = input.value;
    }
    

//KELVIN

    if(inputTypeValue === "kelvin" && resultTypeValue === "fahrenheit"){
        result.value = (parseFloat(input.value-273.15) * (9/5))+32;
    }
    else if(inputTypeValue === "kelvin" && resultTypeValue === "celsius"){
        result.value = input.value-273.15 ;
    }
    else if(inputTypeValue === "kelvin" && resultTypeValue === "kelvin"){
        result.value = input.value;
    }

//SQUARE METER

    if(inputTypeValue === "sqmt" && resultTypeValue === "sqkm"){
        result.value = input.value / 1000000;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "sqmile"){
        result.value = input.value / 2590000;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "sqyard"){
        result.value = input.value * 1.196;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "sqft"){
        result.value = input.value * 10.764;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "sqinch"){
        result.value = input.value * 1550;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "hec"){
        result.value = input.value / 10000;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "acre"){
        result.value = input.value / 4047;
    }
    else if(inputTypeValue === "sqmt" && resultTypeValue === "sqmt"){
        result.value = input.value;
    }
    
//SQUARE KILOMETER

    if(inputTypeValue === "sqkm" && resultTypeValue === "sqmt"){
        result.value = input.value * 1000000;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "sqmile"){
        result.value = input.value / 2.59;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "sqyard"){
        result.value = input.value * 1.196 * 1000000;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "sqft"){
        result.value = input.value * 1.0764* 10000000;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "sqinch"){
        result.value = input.value * 1.550 * 1000000000;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "hec"){
        result.value = input.value * 100;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "acre"){
        result.value = input.value * 247.1;
    }
    else if(inputTypeValue === "sqkm" && resultTypeValue === "sqkm"){
        result.value = input.value;
    }

//SQUARE MILE

    if(inputTypeValue === "sqmile" && resultTypeValue === "sqmt"){
        result.value = input.value * 2.59 * 1000000;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "sqkm"){
        result.value = input.value * 2.59;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "sqyard"){
        result.value = input.value * 3.098 * 1000000;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "sqft"){
        result.value = input.value * 2.788 * 10000000;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "sqinch"){
        result.value = input.value * 4.014 * 1000000000;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "hec"){
        result.value = input.value * 259;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "acre"){
        result.value = input.value * 640;
    }
    else if(inputTypeValue === "sqmile" && resultTypeValue === "sqmile"){
        result.value = input.value;
    } 
    
//SQUARE YARD

    if(inputTypeValue === "sqyard" && resultTypeValue === "sqmt"){
        result.value = input.value / 1.196;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "sqkm"){
        result.value = input.value * 1.196 * 1000000;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "sqmile"){
        result.value = input.value / 3098000;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "sqft"){
        result.value = input.value * 9;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "sqinch"){
        result.value = input.value * 1296;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "hec"){
        result.value = input.value / 11960;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "acre"){
        result.value = input.value / 4840;
    }
    else if(inputTypeValue === "sqyard" && resultTypeValue === "sqyard"){
        result.value = input.value;
    }    

//SQUARE FEET

    if(inputTypeValue === "sqft" && resultTypeValue === "sqmt"){
        result.value = input.value / 10.764;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "sqkm"){
        result.value = input.value / 10760000;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "sqmile"){
        result.value = input.value / 27880000;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "sqyard"){
        result.value = input.value / 9;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "sqinch"){
        result.value = input.value * 144;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "hec"){
        result.value = input.value / 107600;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "acre"){
        result.value = input.value / 43560;
    }
    else if(inputTypeValue === "sqft" && resultTypeValue === "sqft"){
        result.value = input.value;
    }    

//SQUARE INCH

    if(inputTypeValue === "sqinch" && resultTypeValue === "sqmt"){
        result.value = input.value / 1550;
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "sqkm"){
        result.value = (input.value / 1.55)*Math.pow(10,-9);
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "sqmile"){
        result.value = (input.value / 4.014)*Math.pow(10,-9);
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "sqyard"){
        result.value = input.value / 1296;
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "sqft"){
        result.value = input.value / 144;
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "hec"){
        result.value = (input.value / 1.55)*Math.pow(10,-7);
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "acre"){
        result.value = (input.value / 6.273)*Math.pow(10,-6);
    }
    else if(inputTypeValue === "sqinch" && resultTypeValue === "sqinch"){
        result.value = input.value;
    } 
    
//Hectare

    if(inputTypeValue === "hec" && resultTypeValue === "sqmt"){
        result.value = input.value * 10000;
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "sqkm"){
        result.value = input.value / 100;
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "sqmile"){
        result.value = input.value / 259;
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "sqyard"){
        result.value = input.value * 11960;
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "sqft"){
        result.value = input.value * 107600;
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "sqinch"){
        result.value = (input.value * 1.55)*Math.pow(10,7);
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "acre"){
        result.value = input.value * 2.471;
    }
    else if(inputTypeValue === "hec" && resultTypeValue === "hec"){
        result.value = input.value;
    }    

//Acre

    if(inputTypeValue === "acre" && resultTypeValue === "sqmt"){
        result.value = input.value * 4047;
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "sqkm"){
        result.value = input.value / 247.1;
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "sqmile"){
        result.value = input.value / 640;
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "sqyard"){
        result.value = input.value * 4840;
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "sqft"){
        result.value = input.value * 43560;
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "sqinch"){
        result.value = (input.value * 6.273)*Math.pow(10,6);
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "hec"){
        result.value = input.value / 2.471;
    }
    else if(inputTypeValue === "acre" && resultTypeValue === "acre"){
        result.value = input.value;
    }    

//LITRE

    if(inputTypeValue === "lit" && resultTypeValue ==="ml"){
        result.value = input.value * 1000;
    }
    else if(inputTypeValue === "lit" && resultTypeValue ==="cubeft"){
        result.value = input.value / 28.317;
    }
    else if(inputTypeValue === "lit" && resultTypeValue ==="cubeinch"){
        result.value = input.value * 61.024;
    }
    else if(inputTypeValue === "lit" && resultTypeValue ==="lit"){
        result.value = input.value;
    }

//MILLILITRE

    if(inputTypeValue === "ml" && resultTypeValue ==="lit"){
        result.value = input.value / 1000;
    }
    else if(inputTypeValue === "ml" && resultTypeValue ==="cubeft"){
        result.value = input.value / 28320;
    }
    else if(inputTypeValue === "ml" && resultTypeValue ==="cubeinch"){
        result.value = input.value / 16.387;
    }
    else if(inputTypeValue === "ml" && resultTypeValue ==="ml"){
        result.value = input.value;
    }

//CUBIC FEET

    if(inputTypeValue === "cubeft" && resultTypeValue ==="lit"){
        result.value = input.value * 28.317;
    }
    else if(inputTypeValue === "cubeft" && resultTypeValue ==="ml"){
        result.value = input.value * 28320;
    }
    else if(inputTypeValue === "cubeft" && resultTypeValue ==="cubeinch"){
        result.value = input.value * 1728;
    }
    else if(inputTypeValue === "cubeft" && resultTypeValue ==="cubeft"){
        result.value = input.value;
    }

//CUBIC INCH

    if(inputTypeValue === "cubeinch" && resultTypeValue ==="lit"){
        result.value = input.value / 61.024;
    }
    else if(inputTypeValue === "cubeinch" && resultTypeValue ==="ml"){
        result.value = input.value * 16.387;
    }
    else if(inputTypeValue === "cubeinch" && resultTypeValue ==="cubeft"){
        result.value = input.value / 1728;
    }
    else if(inputTypeValue === "cubeinch" && resultTypeValue ==="cubeinch"){
        result.value = input.value;
    }

//KILOGRAM

    if(inputTypeValue === "kg" && resultTypeValue ==="gm"){
        result.value = input.value * 1000;
    }
    else if(inputTypeValue === "kg" && resultTypeValue ==="mg"){
        result.value = input.value * Math.pow(10,6);
    }
    else if(inputTypeValue === "kg" && resultTypeValue ==="pound"){
        result.value = input.value * 2.205;
    }
    else if(inputTypeValue === "kg" && resultTypeValue ==="ounce"){
        result.value = input.value * 35.274;
    }
    else if(inputTypeValue === "kg" && resultTypeValue ==="kg"){
        result.value = input.value;
    }

//GRAM

    if(inputTypeValue === "gm" && resultTypeValue ==="kg"){
        result.value = input.value / 1000;
    }
    else if(inputTypeValue === "gm" && resultTypeValue ==="mg"){
        result.value = input.value * 1000;
    }
    else if(inputTypeValue === "gm" && resultTypeValue ==="pound"){
        result.value = input.value / 453.6;
    }
    else if(inputTypeValue === "gm" && resultTypeValue ==="ounce"){
        result.value = input.value / 28.35;
    }
    else if(inputTypeValue === "gm" && resultTypeValue ==="gm"){
        result.value = input.value;
    }

//MILLIGRAM

    if(inputTypeValue === "mg" && resultTypeValue ==="kg"){
        result.value = input.value / 1000000;
    }
    else if(inputTypeValue === "mg" && resultTypeValue ==="gm"){
        result.value = input.value / 1000;
    }
    else if(inputTypeValue === "mg" && resultTypeValue ==="pound"){
        result.value = input.value / 453600;
    }
    else if(inputTypeValue === "mg" && resultTypeValue ==="ounce"){
        result.value = input.value / 28350;
    }
    else if(inputTypeValue === "mg" && resultTypeValue ==="mg"){
        result.value = input.value;
    }

//POUND

    if(inputTypeValue === "pound" && resultTypeValue ==="kg"){
        result.value = input.value / 2.205;
    }
    else if(inputTypeValue === "pound" && resultTypeValue ==="gm"){
        result.value = input.value * 453.6;
    }
    else if(inputTypeValue === "pound" && resultTypeValue ==="mg"){
        result.value = input.value * 453600;
    }
    else if(inputTypeValue === "pound" && resultTypeValue ==="ounce"){
        result.value = input.value * 16;
    }
    else if(inputTypeValue === "pound" && resultTypeValue ==="pound"){
        result.value = input.value;
    }

//OUNCE

    if(inputTypeValue === "ounce" && resultTypeValue ==="kg"){
        result.value = input.value / 35.274;
    }
    else if(inputTypeValue === "ounce" && resultTypeValue ==="gm"){
        result.value = input.value * 28.35;
    }
    else if(inputTypeValue === "ounce" && resultTypeValue ==="mg"){
        result.value = input.value * 28350;
    }
    else if(inputTypeValue === "ounce" && resultTypeValue ==="pound"){
        result.value = input.value / 16;
    }
    else if(inputTypeValue === "ounce" && resultTypeValue ==="ounce"){
        result.value = input.value;
    }

//SECOND

    if(inputTypeValue === "sec" && resultTypeValue === "nsec")
    {
        result.value = input.value * Math.pow(10,9);
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "mcsec")
    {
        result.value = input.value * Math.pow(10,6);
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "msec")
    {
        result.value = input.value * Math.pow(10,3);
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "min")
    {
        result.value = input.value / 60;
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "hour")
    {
        result.value = input.value / 3600;
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "day")
    {
        result.value = input.value / 86400;
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "week")
    {
        result.value = input.value / 604800;
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "month")
    {
        result.value = input.value / 2.628 * Math.pow(10,-6);
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "year")
    {
        result.value = input.value / 3.154 * Math.pow(10,-7);
    }
    else if(inputTypeValue === "sec" && resultTypeValue === "sec")
    {
        result.value = input.value;
    }

//NANOSECOND

    if(inputTypeValue === "nsec" && resultTypeValue === "sec")
    {
        result.value = input.value / Math.pow(10,9);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "mcsec")
    {
        result.value = input.value / Math.pow(10,3);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "msec")
    {
        result.value = input.value / Math.pow(10,6);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "min")
    {
        result.value = input.value / 6 * Math.pow(10,-10);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "hour")
    {
        result.value = input.value / 3.6 * Math.pow(10,-12);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "day")
    {
        result.value = input.value / 8.64 * Math.pow(10,-13);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "week")
    {
        result.value = input.value / 6.048 * Math.pow(10,-14);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "month")
    {
        result.value = input.value / 2.628 * Math.pow(10,-15);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "year")
    {
        result.value = input.value / 3.154 * Math.pow(10,-16);
    }
    else if(inputTypeValue === "nsec" && resultTypeValue === "nsec")
    {
        result.value = input.value;
    }

//MICROSECOND

    if(inputTypeValue === "mcsec" && resultTypeValue === "sec")
    {
        result.value = input.value / Math.pow(10,6);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "nsec")
    {
        result.value = input.value * Math.pow(10,3);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "msec")
    {
        result.value = input.value / Math.pow(10,3);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "min")
    {
        result.value = input.value / 6 * Math.pow(10,-7);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "hour")
    {
        result.value = input.value / 3.6 * Math.pow(10,-9);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "day")
    {
        result.value = input.value / 8.64 * Math.pow(10,-10);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "week")
    {
        result.value = input.value / 6.048 * Math.pow(10,-11);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "month")
    {
        result.value = input.value / 2.628 * Math.pow(10,-12);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "year")
    {
        result.value = input.value / 3.154 * Math.pow(10,-13);
    }
    else if(inputTypeValue === "mcsec" && resultTypeValue === "mcsec")
    {
        result.value = input.value;
    }

//MILLISECOND

    if(inputTypeValue === "msec" && resultTypeValue === "sec")
    {
        result.value = input.value / Math.pow(10,3);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "nsec")
    {
        result.value = input.value * Math.pow(10,6);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "mcsec")
    {
        result.value = input.value * Math.pow(10,3);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "min")
    {
        result.value = input.value / 60000 ;
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "hour")
    {
        result.value = input.value / 3.6 * Math.pow(10,-6);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "day")
    {
        result.value = input.value / 8.64 * Math.pow(10,-7);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "week")
    {
        result.value = input.value / 6.048 * Math.pow(10,-8);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "month")
    {
        result.value = input.value / 2.628 * Math.pow(10,-9);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "year")
    {
        result.value = input.value / 3.154 * Math.pow(10,-10);
    }
    else if(inputTypeValue === "msec" && resultTypeValue === "msec")
    {
        result.value = input.value;
    }

//MINUTE

    if(inputTypeValue === "min" && resultTypeValue === "sec")
    {
        result.value = input.value * 60;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "nsec")
    {
        result.value = input.value * 6 * Math.pow(10,10);
    }
    else if(inputTypeValue === "min" && resultTypeValue === "mcsec")
    {
        result.value = input.value * 6 * Math.pow(10,7);
    }
    else if(inputTypeValue === "min" && resultTypeValue === "msec")
    {
        result.value = input.value * 60000;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "hour")
    {
        result.value = input.value / 60;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "day")
    {
        result.value = input.value / 1440;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "week")
    {
        result.value = input.value / 10080;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "month")
    {
        result.value = input.value / 43800;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "year")
    {
        result.value = input.value / 525600;
    }
    else if(inputTypeValue === "min" && resultTypeValue === "min")
    {
        result.value = input.value;
    }

//HOUR

    if(inputTypeValue === "hour" && resultTypeValue === "sec")
    {
        result.value = input.value * 3600;
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "nsec")
    {
        result.value = input.value * 3.6 * Math.pow(10,12);
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "mcsec")
    {
        result.value = input.value * 3.6 * Math.pow(10,9);
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "msec")
    {
        result.value = input.value * 3.6 * Math.pow(10,6);
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "min")
    {
        result.value = input.value * 60;
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "day")
    {
        result.value = input.value / 24;
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "week")
    {
        result.value = input.value / 168;
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "month")
    {
        result.value = input.value / 730;
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "year")
    {
        result.value = input.value / 8760;
    }
    else if(inputTypeValue === "hour" && resultTypeValue === "hour")
    {
        result.value = input.value;
    }

//DAY

    if(inputTypeValue === "day" && resultTypeValue === "sec")
    {
        result.value = input.value * 86400;
    }
    else if(inputTypeValue === "day" && resultTypeValue === "nsec")
    {
        result.value = input.value * 8.64 * Math.pow(10,13);
    }
    else if(inputTypeValue === "day" && resultTypeValue === "mcsec")
    {
        result.value = input.value * 8.64 * Math.pow(10,10);
    }
    else if(inputTypeValue === "day" && resultTypeValue === "msec")
    {
        result.value = input.value * 8.64 * Math.pow(10,7);
    }
    else if(inputTypeValue === "day" && resultTypeValue === "min")
    {
        result.value = input.value * 1440;
    }
    else if(inputTypeValue === "day" && resultTypeValue === "hour")
    {
        result.value = input.value * 24;
    }
    else if(inputTypeValue === "day" && resultTypeValue === "week")
    {
        result.value = input.value / 7;
    }
    else if(inputTypeValue === "day" && resultTypeValue === "month")
    {
        result.value = input.value / 30.417;
    }
    else if(inputTypeValue === "day" && resultTypeValue === "year")
    {
        result.value = input.value / 365;
    }
    else if(inputTypeValue === "day" && resultTypeValue === "day")
    {
        result.value = input.value;
    }

//WEEK

    if(inputTypeValue === "week" && resultTypeValue === "sec")
    {
        result.value = input.value * 604800;
    }
    else if(inputTypeValue === "week" && resultTypeValue === "nsec")
    {
        result.value = input.value * 6.048 * Math.pow(10,14);
    }
    else if(inputTypeValue === "week" && resultTypeValue === "mcsec")
    {
        result.value = input.value * 6.048 * Math.pow(10,11);
    }
    else if(inputTypeValue === "week" && resultTypeValue === "msec")
    {
        result.value = input.value * 6.048 * Math.pow(10,8);
    }
    else if(inputTypeValue === "week" && resultTypeValue === "min")
    {
        result.value = input.value * 10080;
    }
    else if(inputTypeValue === "week" && resultTypeValue === "hour")
    {
        result.value = input.value * 168;
    }
    else if(inputTypeValue === "week" && resultTypeValue === "day")
    {
        result.value = input.value * 7;
    }
    else if(inputTypeValue === "week" && resultTypeValue === "month")
    {
        result.value = input.value / 4.345;
    }
    else if(inputTypeValue === "week" && resultTypeValue === "year")
    {
        result.value = input.value / 52.143;
    }
    else if(inputTypeValue === "week" && resultTypeValue === "week")
    {
        result.value = input.value;
    }

//MONTH

    if(inputTypeValue === "month" && resultTypeValue === "sec")
    {
        result.value = input.value * 2.628 * Math.pow(10,6);
    }
    else if(inputTypeValue === "month" && resultTypeValue === "nsec")
    {
        result.value = input.value * 2.628 * Math.pow(10,15);
    }
    else if(inputTypeValue === "month" && resultTypeValue === "mcsec")
    {
        result.value = input.value * 2.628 * Math.pow(10,12);
    }
    else if(inputTypeValue === "month" && resultTypeValue === "msec")
    {
        result.value = input.value * 2.628 * Math.pow(10,9);
    }
    else if(inputTypeValue === "month" && resultTypeValue === "min")
    {
        result.value = input.value * 43800;
    }
    else if(inputTypeValue === "month" && resultTypeValue === "hour")
    {
        result.value = input.value * 730;
    }
    else if(inputTypeValue === "month" && resultTypeValue === "day")
    {
        result.value = input.value * 30.417;
    }
    else if(inputTypeValue === "month" && resultTypeValue === "week")
    {
        result.value = input.value * 4.345;
    }
    else if(inputTypeValue === "month" && resultTypeValue === "year")
    {
        result.value = input.value / 12;
    }
    else if(inputTypeValue === "month" && resultTypeValue === "month")
    {
        result.value = input.value;
    }

//YEAR

    if(inputTypeValue === "year" && resultTypeValue === "sec")
    {
        result.value = input.value * 3.154 * Math.pow(10,7);
    }
    else if(inputTypeValue === "year" && resultTypeValue === "nsec")
    {
        result.value = input.value * 3.154 * Math.pow(10,16);
    }
    else if(inputTypeValue === "year" && resultTypeValue === "mcsec")
    {
        result.value = input.value * 3.154 * Math.pow(10,13);
    }
    else if(inputTypeValue === "year" && resultTypeValue === "msec")
    {
        result.value = input.value * 3.154 * Math.pow(10,10);
    }
    else if(inputTypeValue === "year" && resultTypeValue === "min")
    {
        result.value = input.value * 525600;
    }
    else if(inputTypeValue === "year" && resultTypeValue === "hour")
    {
        result.value = input.value * 8760;
    }
    else if(inputTypeValue === "year" && resultTypeValue === "day")
    {
        result.value = input.value * 365;
    }
    else if(inputTypeValue === "year" && resultTypeValue === "week")
    {
        result.value = input.value * 52.143;
    }
    else if(inputTypeValue === "year" && resultTypeValue === "month")
    {
        result.value = input.value * 12;
    }
    else if(inputTypeValue === "year" && resultTypeValue === "year")
    {
        result.value = input.value;
    }

}
