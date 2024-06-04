// app/api/place/route.js
export async function GET(request) {
  console.log(request);
  const placeId = request.searchParams.get('placeId');

  if (!placeId) {
    return new Response(JSON.stringify({ error: 'PlaceId is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJSSxEVKGMGGARGOjerrvUdf8&fields=name,formatted_address,formatted_phone_number,photo,website&key=AIzaSyBZUAsS8XpN53YIbn-qqxEnWloCjf6HDd0';

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK") {
      const result = data.result;
      return new Response(JSON.stringify({
        name: result.name,
        address: result.formatted_address,
        phone: result.formatted_phone_number,
        website: result.website,
        photoUrl: result.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=${apiKey}` : null
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Place not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch place details' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
