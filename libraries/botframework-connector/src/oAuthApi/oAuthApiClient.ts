/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { OAuthApiClientContext } from "./oAuthApiClientContext";

class OAuthApiClient extends OAuthApiClientContext {
  serializer = new msRest.Serializer(Mappers);

  // Operation groups
  botSignIn: operations.BotSignIn;
  userToken: operations.UserToken;

  /**
   * @class
   * Initializes a new instance of the OAuthApiClient class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(credentials, baseUri, options);
    this.botSignIn = new operations.BotSignIn(this);
    this.userToken = new operations.UserToken(this);
  }
}

export { OAuthApiClient, Models as OAuthApiModels, Mappers as OAuthApiMappers };
