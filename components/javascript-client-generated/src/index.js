/**
 * Zaun
 * Zaun service 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Action', 'model/Bot', 'model/Channel', 'model/Conversation', 'model/Deployment', 'model/ExecActions', 'model/ExecFlow', 'model/ExecIntent', 'model/ExecStateMapper', 'model/Flow', 'model/FlowActions', 'model/FlowIntents', 'model/FlowMethods', 'model/FlowNlus', 'model/FlowProcessResult', 'model/FlowStateActions', 'model/FlowStates', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2005Members', 'model/Intent', 'model/IntentAttribute', 'model/IntentAttributes', 'model/IntentClassifier', 'model/Login', 'model/Message', 'model/Method', 'model/Nlu', 'model/PagedBot', 'model/ProcessedMessage', 'model/Response', 'model/ResponseMessage', 'model/Role', 'model/Session', 'model/SessionHistory', 'model/State', 'model/StateAction', 'model/StateMapResult', 'model/StateTransition', 'model/StateTransitions', 'model/Subscription', 'model/Team', 'model/Token', 'model/User', 'api/AnalyticApi', 'api/AuthApi', 'api/BotApi', 'api/ChannelApi', 'api/DeploymentApi', 'api/RoleApi', 'api/SessionApi', 'api/TeamApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Action'), require('./model/Bot'), require('./model/Channel'), require('./model/Conversation'), require('./model/Deployment'), require('./model/ExecActions'), require('./model/ExecFlow'), require('./model/ExecIntent'), require('./model/ExecStateMapper'), require('./model/Flow'), require('./model/FlowActions'), require('./model/FlowIntents'), require('./model/FlowMethods'), require('./model/FlowNlus'), require('./model/FlowProcessResult'), require('./model/FlowStateActions'), require('./model/FlowStates'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2005Members'), require('./model/Intent'), require('./model/IntentAttribute'), require('./model/IntentAttributes'), require('./model/IntentClassifier'), require('./model/Login'), require('./model/Message'), require('./model/Method'), require('./model/Nlu'), require('./model/PagedBot'), require('./model/ProcessedMessage'), require('./model/Response'), require('./model/ResponseMessage'), require('./model/Role'), require('./model/Session'), require('./model/SessionHistory'), require('./model/State'), require('./model/StateAction'), require('./model/StateMapResult'), require('./model/StateTransition'), require('./model/StateTransitions'), require('./model/Subscription'), require('./model/Team'), require('./model/Token'), require('./model/User'), require('./api/AnalyticApi'), require('./api/AuthApi'), require('./api/BotApi'), require('./api/ChannelApi'), require('./api/DeploymentApi'), require('./api/RoleApi'), require('./api/SessionApi'), require('./api/TeamApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Action, Bot, Channel, Conversation, Deployment, ExecActions, ExecFlow, ExecIntent, ExecStateMapper, Flow, FlowActions, FlowIntents, FlowMethods, FlowNlus, FlowProcessResult, FlowStateActions, FlowStates, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2005Members, Intent, IntentAttribute, IntentAttributes, IntentClassifier, Login, Message, Method, Nlu, PagedBot, ProcessedMessage, Response, ResponseMessage, Role, Session, SessionHistory, State, StateAction, StateMapResult, StateTransition, StateTransitions, Subscription, Team, Token, User, AnalyticApi, AuthApi, BotApi, ChannelApi, DeploymentApi, RoleApi, SessionApi, TeamApi, UserApi) {
  'use strict';

  /**
   * Zaun_service.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Zaun = require('index'); // See note below*.
   * var xxxSvc = new Zaun.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Zaun.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Zaun.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Zaun.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Action model constructor.
     * @property {module:model/Action}
     */
    Action: Action,
    /**
     * The Bot model constructor.
     * @property {module:model/Bot}
     */
    Bot: Bot,
    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel: Channel,
    /**
     * The Conversation model constructor.
     * @property {module:model/Conversation}
     */
    Conversation: Conversation,
    /**
     * The Deployment model constructor.
     * @property {module:model/Deployment}
     */
    Deployment: Deployment,
    /**
     * The ExecActions model constructor.
     * @property {module:model/ExecActions}
     */
    ExecActions: ExecActions,
    /**
     * The ExecFlow model constructor.
     * @property {module:model/ExecFlow}
     */
    ExecFlow: ExecFlow,
    /**
     * The ExecIntent model constructor.
     * @property {module:model/ExecIntent}
     */
    ExecIntent: ExecIntent,
    /**
     * The ExecStateMapper model constructor.
     * @property {module:model/ExecStateMapper}
     */
    ExecStateMapper: ExecStateMapper,
    /**
     * The Flow model constructor.
     * @property {module:model/Flow}
     */
    Flow: Flow,
    /**
     * The FlowActions model constructor.
     * @property {module:model/FlowActions}
     */
    FlowActions: FlowActions,
    /**
     * The FlowIntents model constructor.
     * @property {module:model/FlowIntents}
     */
    FlowIntents: FlowIntents,
    /**
     * The FlowMethods model constructor.
     * @property {module:model/FlowMethods}
     */
    FlowMethods: FlowMethods,
    /**
     * The FlowNlus model constructor.
     * @property {module:model/FlowNlus}
     */
    FlowNlus: FlowNlus,
    /**
     * The FlowProcessResult model constructor.
     * @property {module:model/FlowProcessResult}
     */
    FlowProcessResult: FlowProcessResult,
    /**
     * The FlowStateActions model constructor.
     * @property {module:model/FlowStateActions}
     */
    FlowStateActions: FlowStateActions,
    /**
     * The FlowStates model constructor.
     * @property {module:model/FlowStates}
     */
    FlowStates: FlowStates,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2005Members model constructor.
     * @property {module:model/InlineResponse2005Members}
     */
    InlineResponse2005Members: InlineResponse2005Members,
    /**
     * The Intent model constructor.
     * @property {module:model/Intent}
     */
    Intent: Intent,
    /**
     * The IntentAttribute model constructor.
     * @property {module:model/IntentAttribute}
     */
    IntentAttribute: IntentAttribute,
    /**
     * The IntentAttributes model constructor.
     * @property {module:model/IntentAttributes}
     */
    IntentAttributes: IntentAttributes,
    /**
     * The IntentClassifier model constructor.
     * @property {module:model/IntentClassifier}
     */
    IntentClassifier: IntentClassifier,
    /**
     * The Login model constructor.
     * @property {module:model/Login}
     */
    Login: Login,
    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message: Message,
    /**
     * The Method model constructor.
     * @property {module:model/Method}
     */
    Method: Method,
    /**
     * The Nlu model constructor.
     * @property {module:model/Nlu}
     */
    Nlu: Nlu,
    /**
     * The PagedBot model constructor.
     * @property {module:model/PagedBot}
     */
    PagedBot: PagedBot,
    /**
     * The ProcessedMessage model constructor.
     * @property {module:model/ProcessedMessage}
     */
    ProcessedMessage: ProcessedMessage,
    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response: Response,
    /**
     * The ResponseMessage model constructor.
     * @property {module:model/ResponseMessage}
     */
    ResponseMessage: ResponseMessage,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The SessionHistory model constructor.
     * @property {module:model/SessionHistory}
     */
    SessionHistory: SessionHistory,
    /**
     * The State model constructor.
     * @property {module:model/State}
     */
    State: State,
    /**
     * The StateAction model constructor.
     * @property {module:model/StateAction}
     */
    StateAction: StateAction,
    /**
     * The StateMapResult model constructor.
     * @property {module:model/StateMapResult}
     */
    StateMapResult: StateMapResult,
    /**
     * The StateTransition model constructor.
     * @property {module:model/StateTransition}
     */
    StateTransition: StateTransition,
    /**
     * The StateTransitions model constructor.
     * @property {module:model/StateTransitions}
     */
    StateTransitions: StateTransitions,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team: Team,
    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The AnalyticApi service constructor.
     * @property {module:api/AnalyticApi}
     */
    AnalyticApi: AnalyticApi,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The BotApi service constructor.
     * @property {module:api/BotApi}
     */
    BotApi: BotApi,
    /**
     * The ChannelApi service constructor.
     * @property {module:api/ChannelApi}
     */
    ChannelApi: ChannelApi,
    /**
     * The DeploymentApi service constructor.
     * @property {module:api/DeploymentApi}
     */
    DeploymentApi: DeploymentApi,
    /**
     * The RoleApi service constructor.
     * @property {module:api/RoleApi}
     */
    RoleApi: RoleApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The TeamApi service constructor.
     * @property {module:api/TeamApi}
     */
    TeamApi: TeamApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));