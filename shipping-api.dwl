%dw 2.0
import * from dw::core::Dates
import * from dw::core::Periods
output application/json
---
{
	shipperID: payload.shipperID, 
	categoryName: payload.categoryName, 
	postalCode: payload.postalCode,  
	shippingDate: today() + period({days: randomInt(20)})
}
