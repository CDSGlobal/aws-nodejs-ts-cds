import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { doLookup } from './functionLogic';

export const lambdaHandler: Handler = async (event: APIGatewayEvent, context: Context, callback?: Callback) => {

  const lookupResult = await doLookup(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: lookupResult.message,
      responseId: lookupResult.id,
      input: event,
    }),
  };

  if (callback) {
    callback(null, response);
  } else {
    return response;
  }
};
