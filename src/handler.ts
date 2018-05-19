import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { doLookup } from './functionLogic';

export const lambdaHandler: Handler = async (event: APIGatewayEvent, context: Context, callback?: Callback) => {

  const lookupResult = await doLookup(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(lookupResult),
  };

  if (callback) {
    callback(null, response);
  } else {
    return response;
  }
};
