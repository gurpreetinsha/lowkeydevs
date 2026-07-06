import { $ as AstroError, B as PrerenderDynamicEndpointPathCollide, D as MiddlewareNotAResponse, E as MiddlewareNoDataOrNextCalled, G as SessionStorageInitError, H as ReservedSlotName, I as NoMatchingStaticPathFound, J as UnableToLoadLogger, K as SessionStorageSaveError, Q as i18nNoLocaleFoundInPath, R as PageNumberParamNotFound, T as LocalsReassigned, U as ResponseSentError, W as RewriteWithBodyUsed, a as ClientAddressNotAvailable, b as InvalidGetStaticPathsEntry, g as GetStaticPathsRequired, h as GetStaticPathsInvalidRouteParam, i as CacheNotEnabled, m as GetStaticPathsExpectedParams, n as ActionsReturnedInvalidDataError, p as ForbiddenRewrite, q as StaticClientAddressNotAvailable, r as AstroResponseHeadersReassigned, t as ActionNotFoundError, w as LocalsNotAnObject, x as InvalidGetStaticPathsReturn, z as PrerenderClientAddressNotAvailable } from "./chunks/errors-data_sKwIzwfZ.mjs";
import { C as matchPattern, a as fileExtension, d as removeLeadingForwardSlash, h as trimSlashes, i as collapseDuplicateTrailingSlashes, l as joinPaths, m as slash, n as collapseDuplicateLeadingSlashes, o as hasFileExtension, p as removeTrailingForwardSlash, r as collapseDuplicateSlashes, s as isInternalPath, t as appendForwardSlash, u as prependForwardSlash } from "./chunks/path_CP1oRZAZ.mjs";
import { A as DEFAULT_404_COMPONENT, C as renderEndpoint, D as isRoute500, E as isRoute404, F as fetchStateSymbol, I as originPathnameSymbol, L as pipelineSymbol, M as REROUTABLE_STATUS_CODES, N as appSymbol, O as ASTRO_ERROR_HEADER, P as clientAddressSymbol, R as responseSentSymbol$1, a as renderComponent, b as isRenderInstruction, c as createSlotValueFromString, d as isRenderTemplateResult, f as renderTemplate, h as generateCspDigest, i as renderJSX, j as REDIRECT_STATUS_CODES, k as ASTRO_GENERATOR, m as decryptString, p as decodeKey, r as renderPage, s as chunkToString, u as renderSlotToString, x as isAstroComponentFactory } from "./chunks/server_Dt_BWqqO.mjs";
import nodePath from "node:path";
import "@vercel/routing-utils";
import colors from "piccolore";
import { parse, stringify, unflatten } from "devalue";
import "es-module-lexer";
import { parse as parse$1, serialize } from "cookie";
import { escape } from "html-escaper";
import { createStorage } from "unstorage";
nodePath.posix.join;
//#endregion
//#region node_modules/@astrojs/vercel/dist/index.js
var ASTRO_PATH_HEADER = "x-astro-path";
var ASTRO_PATH_PARAM = "x_astro_path";
var ASTRO_LOCALS_HEADER = "x-astro-locals";
var ASTRO_MIDDLEWARE_SECRET_HEADER = "x-astro-middleware-secret";
`${ASTRO_PATH_PARAM}`;
//#endregion
//#region \0virtual:astro-vercel:config
var middlewareSecret = "3a54d975-1ab9-40ae-94ce-049d356eaf80";
//#endregion
//#region node_modules/astro/dist/actions/consts.js
var ACTION_QUERY_PARAMS = {
	actionName: "_action",
	actionPayload: "_astroActionPayload"
};
//#endregion
//#region node_modules/astro/dist/actions/runtime/client.js
var codeToStatusMap = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	CONTENT_TOO_LARGE: 413,
	URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	MISDIRECTED_REQUEST: 421,
	UNPROCESSABLE_CONTENT: 422,
	LOCKED: 423,
	FAILED_DEPENDENCY: 424,
	TOO_EARLY: 425,
	UPGRADE_REQUIRED: 426,
	PRECONDITION_REQUIRED: 428,
	TOO_MANY_REQUESTS: 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505,
	VARIANT_ALSO_NEGOTIATES: 506,
	INSUFFICIENT_STORAGE: 507,
	LOOP_DETECTED: 508,
	NETWORK_AUTHENTICATION_REQUIRED: 511
};
var statusToCodeMap = Object.fromEntries(Object.entries(codeToStatusMap).map(([key, value]) => [value, key]));
var ActionError = class ActionError extends Error {
	type = "AstroActionError";
	code = "INTERNAL_SERVER_ERROR";
	status = 500;
	constructor(params) {
		super(params.message);
		this.code = params.code;
		this.status = ActionError.codeToStatus(params.code);
		if (params.stack) this.stack = params.stack;
	}
	static codeToStatus(code) {
		return codeToStatusMap[code];
	}
	static statusToCode(status) {
		return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
	}
	static fromJson(body) {
		if (isInputError(body)) return new ActionInputError(body.issues);
		if (isActionError(body)) return new ActionError(body);
		return new ActionError({ code: "INTERNAL_SERVER_ERROR" });
	}
};
function isActionError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
var ActionInputError = class extends ActionError {
	type = "AstroActionInputError";
	issues;
	fields;
	constructor(issues) {
		super({
			message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
			code: "BAD_REQUEST"
		});
		this.issues = issues;
		this.fields = {};
		for (const issue of issues) if (issue.path.length > 0) {
			const key = issue.path[0].toString();
			this.fields[key] ??= [];
			this.fields[key]?.push(issue.message);
		}
	}
};
function deserializeActionResult(res) {
	if (res.type === "error") {
		let json;
		try {
			json = JSON.parse(res.body);
		} catch {
			return {
				data: void 0,
				error: new ActionError({
					message: res.body,
					code: "INTERNAL_SERVER_ERROR"
				})
			};
		}
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": void 0,
			"SSR": true
		}, { OS: "Windows_NT" })?.PROD) return {
			error: ActionError.fromJson(json),
			data: void 0
		};
		else {
			const error = ActionError.fromJson(json);
			error.stack = actionResultErrorStack.get();
			return {
				error,
				data: void 0
			};
		}
	}
	if (res.type === "empty") return {
		data: void 0,
		error: void 0
	};
	return {
		data: parse(res.body, { URL: (href) => new URL(href) }),
		error: void 0
	};
}
var actionResultErrorStack = /* @__PURE__ */ (function actionResultErrorStackFn() {
	let errorStack;
	return {
		set(stack) {
			errorStack = stack;
		},
		get() {
			return errorStack;
		}
	};
})();
function getActionQueryString(name) {
	return `?${new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name }).toString()}`;
}
//#endregion
//#region node_modules/astro/dist/core/build/util.js
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
	switch (trailingSlash) {
		case "always": return true;
		case "never": return false;
		case "ignore": switch (buildFormat) {
			case "directory": return true;
			case "preserve":
			case "file": return false;
		}
	}
}
//#endregion
//#region node_modules/astro/dist/core/request-body.js
async function readBodyWithLimit(request, limit) {
	const contentLengthHeader = request.headers.get("content-length");
	if (contentLengthHeader) {
		const contentLength = Number.parseInt(contentLengthHeader, 10);
		if (Number.isFinite(contentLength) && contentLength > limit) throw new BodySizeLimitError(limit);
	}
	if (!request.body) return /* @__PURE__ */ new Uint8Array();
	const reader = request.body.getReader();
	const chunks = [];
	let received = 0;
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		if (value) {
			received += value.byteLength;
			if (received > limit) throw new BodySizeLimitError(limit);
			chunks.push(value);
		}
	}
	const buffer = new Uint8Array(received);
	let offset = 0;
	for (const chunk of chunks) {
		buffer.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return buffer;
}
var BodySizeLimitError = class extends Error {
	limit;
	constructor(limit) {
		super(`Request body exceeds the configured limit of ${limit} bytes`);
		this.name = "BodySizeLimitError";
		this.limit = limit;
	}
};
//#endregion
//#region node_modules/astro/dist/actions/runtime/server.js
function getActionContext(context) {
	const callerInfo = getCallerInfo(context);
	const actionResultAlreadySet = Boolean(context.locals._actionPayload);
	let action = void 0;
	if (callerInfo && context.request.method === "POST" && !actionResultAlreadySet) action = {
		calledFrom: callerInfo.from,
		name: callerInfo.name,
		handler: async () => {
			const pipeline = Reflect.get(context, pipelineSymbol);
			const callerInfoName = shouldAppendForwardSlash(pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
			let baseAction;
			try {
				baseAction = await pipeline.getAction(callerInfoName);
			} catch (error) {
				if (error instanceof Error && "name" in error && typeof error.name === "string" && error.name === ActionNotFoundError.name) return {
					data: void 0,
					error: new ActionError({ code: "NOT_FOUND" })
				};
				throw error;
			}
			const bodySizeLimit = pipeline.manifest.actionBodySizeLimit;
			let input;
			try {
				input = await parseRequestBody(context.request, bodySizeLimit);
			} catch (e) {
				if (e instanceof ActionError) return {
					data: void 0,
					error: e
				};
				if (e instanceof TypeError) return {
					data: void 0,
					error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" })
				};
				throw e;
			}
			const omitKeys = [
				"props",
				"getActionResult",
				"callAction",
				"redirect"
			];
			const actionAPIContext = Object.create(Object.getPrototypeOf(context), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(context)).filter(([key]) => !omitKeys.includes(key))));
			Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
			return baseAction.bind(actionAPIContext)(input);
		}
	};
	function setActionResult(actionName, actionResult) {
		context.locals._actionPayload = {
			actionResult,
			actionName
		};
	}
	return {
		action,
		setActionResult,
		serializeActionResult,
		deserializeActionResult
	};
}
function getCallerInfo(ctx) {
	if (ctx.routePattern === "/_actions/[...path]") return {
		from: "rpc",
		name: ctx.url.pathname.replace(/^.*\/_actions\//, "")
	};
	const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
	if (queryParam) return {
		from: "form",
		name: queryParam
	};
}
async function parseRequestBody(request, bodySizeLimit) {
	const contentType = request.headers.get("content-type");
	const contentLengthHeader = request.headers.get("content-length");
	const contentLength = contentLengthHeader ? Number.parseInt(contentLengthHeader, 10) : void 0;
	const hasContentLength = typeof contentLength === "number" && Number.isFinite(contentLength);
	if (!contentType) return void 0;
	if (hasContentLength && contentLength > bodySizeLimit) throw new ActionError({
		code: "CONTENT_TOO_LARGE",
		message: `Request body exceeds ${bodySizeLimit} bytes`
	});
	try {
		if (hasContentType(contentType, formContentTypes)) {
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				return await new Request(request.url, {
					method: request.method,
					headers: request.headers,
					body: toArrayBuffer(body)
				}).formData();
			}
			return await request.clone().formData();
		}
		if (hasContentType(contentType, ["application/json"])) {
			if (contentLength === 0) return void 0;
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				if (body.byteLength === 0) return void 0;
				return JSON.parse(new TextDecoder().decode(body));
			}
			return await request.clone().json();
		}
	} catch (e) {
		if (e instanceof BodySizeLimitError) throw new ActionError({
			code: "CONTENT_TOO_LARGE",
			message: `Request body exceeds ${bodySizeLimit} bytes`
		});
		throw e;
	}
	throw new TypeError("Unsupported content type");
}
var ACTION_API_CONTEXT_SYMBOL = /* @__PURE__ */ Symbol.for("astro.actionAPIContext");
var formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
	const type = contentType.split(";")[0].toLowerCase();
	return expected.some((t) => type === t);
}
function serializeActionResult(res) {
	if (res.error) {
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": void 0,
			"SSR": true
		}, { OS: "Windows_NT" })?.DEV) actionResultErrorStack.set(res.error.stack);
		let body2;
		if (res.error instanceof ActionInputError) body2 = {
			type: res.error.type,
			issues: res.error.issues,
			fields: res.error.fields
		};
		else body2 = {
			...res.error,
			message: res.error.message
		};
		return {
			type: "error",
			status: res.error.status,
			contentType: "application/json",
			body: JSON.stringify(body2)
		};
	}
	if (res.data === void 0) return {
		type: "empty",
		status: 204
	};
	let body;
	try {
		body = stringify(res.data, { URL: (value) => value instanceof URL && value.href });
	} catch (e) {
		let hint = ActionsReturnedInvalidDataError.hint;
		if (res.data instanceof Response) hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
		throw new AstroError({
			...ActionsReturnedInvalidDataError,
			message: ActionsReturnedInvalidDataError.message(String(e)),
			hint
		});
	}
	return {
		type: "data",
		status: 200,
		contentType: "application/json+devalue",
		body
	};
}
function toArrayBuffer(buffer) {
	const copy = new Uint8Array(buffer.byteLength);
	copy.set(buffer);
	return copy.buffer;
}
//#endregion
//#region node_modules/astro/dist/actions/utils.js
function hasActionPayload(locals) {
	return "_actionPayload" in locals;
}
function createGetActionResult(locals) {
	return (actionFn) => {
		if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName)) return;
		return deserializeActionResult(locals._actionPayload.actionResult);
	};
}
function createCallAction(context) {
	return (baseAction, input) => {
		Reflect.set(context, ACTION_API_CONTEXT_SYMBOL, true);
		return baseAction.bind(context)(input);
	};
}
//#endregion
//#region node_modules/astro/dist/core/cookies/cookies.js
var DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
var DELETED_VALUE = "deleted";
var responseSentSymbol = /* @__PURE__ */ Symbol.for("astro.responseSent");
var identity = (value) => value;
var AstroCookie = class {
	value;
	constructor(value) {
		this.value = value;
	}
	json() {
		if (this.value === void 0) throw new Error(`Cannot convert undefined to an object.`);
		return JSON.parse(this.value);
	}
	number() {
		return Number(this.value);
	}
	boolean() {
		if (this.value === "false") return false;
		if (this.value === "0") return false;
		return Boolean(this.value);
	}
};
var AstroCookies = class {
	#request;
	#requestValues;
	#outgoing;
	#consumed;
	constructor(request) {
		this.#request = request;
		this.#requestValues = null;
		this.#outgoing = null;
		this.#consumed = false;
	}
	/**
	* Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
	* in a Set-Cookie header added to the response.
	* @param key The cookie to delete
	* @param options Options related to this deletion, such as the path of the cookie.
	*/
	delete(key, options) {
		const { maxAge: _ignoredMaxAge, expires: _ignoredExpires, ...sanitizedOptions } = options || {};
		const serializeOptions = {
			expires: DELETED_EXPIRATION,
			...sanitizedOptions
		};
		this.#ensureOutgoingMap().set(key, [
			DELETED_VALUE,
			serialize(key, DELETED_VALUE, serializeOptions),
			false
		]);
	}
	/**
	* Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
	* request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
	* from that set call, overriding any values already part of the request.
	* @param key The cookie to get.
	* @returns An object containing the cookie value as well as convenience methods for converting its value.
	*/
	get(key, options = void 0) {
		if (this.#outgoing?.has(key)) {
			let [serializedValue, , isSetValue] = this.#outgoing.get(key);
			if (isSetValue) return new AstroCookie(serializedValue);
			else return;
		}
		const decode = options?.decode ?? decodeURIComponent;
		const values = this.#ensureParsed();
		if (key in values) {
			const value = values[key];
			if (value) {
				let decodedValue;
				try {
					decodedValue = decode(value);
				} catch (_error) {
					decodedValue = value;
				}
				return new AstroCookie(decodedValue);
			}
		}
	}
	/**
	* Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
	* part of the initial request or set via Astro.cookies.set(key)
	* @param key The cookie to check for.
	* @param _options This parameter is no longer used.
	* @returns
	*/
	has(key, _options) {
		if (this.#outgoing?.has(key)) {
			let [, , isSetValue] = this.#outgoing.get(key);
			return isSetValue;
		}
		return this.#ensureParsed()[key] !== void 0;
	}
	/**
	* Astro.cookies.set(key, value) is used to set a cookie's value. If provided
	* an object it will be stringified via JSON.stringify(value). Additionally you
	* can provide options customizing how this cookie will be set, such as setting httpOnly
	* in order to prevent the cookie from being read in client-side JavaScript.
	* @param key The name of the cookie to set.
	* @param value A value, either a string or other primitive or an object.
	* @param options Options for the cookie, such as the path and security settings.
	*/
	set(key, value, options) {
		if (this.#consumed) {
			const warning = /* @__PURE__ */ new Error("Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page.");
			warning.name = "Warning";
			console.warn(warning);
		}
		let serializedValue;
		if (typeof value === "string") serializedValue = value;
		else {
			let toStringValue = value.toString();
			if (toStringValue === Object.prototype.toString.call(value)) serializedValue = JSON.stringify(value);
			else serializedValue = toStringValue;
		}
		const serializeOptions = {};
		if (options) Object.assign(serializeOptions, options);
		this.#ensureOutgoingMap().set(key, [
			serializedValue,
			serialize(key, serializedValue, serializeOptions),
			true
		]);
		if (this.#request[responseSentSymbol]) throw new AstroError({ ...ResponseSentError });
	}
	/**
	* Merges a new AstroCookies instance into the current instance. Any new cookies
	* will be added to the current instance, overwriting any existing cookies with the same name.
	*/
	merge(cookies) {
		const outgoing = cookies.#outgoing;
		if (outgoing) for (const [key, value] of outgoing) this.#ensureOutgoingMap().set(key, value);
	}
	/**
	* Astro.cookies.header() returns an iterator for the cookies that have previously
	* been set by either Astro.cookies.set() or Astro.cookies.delete().
	* This method is primarily used by adapters to set the header on outgoing responses.
	* @returns
	*/
	*headers() {
		if (this.#outgoing == null) return;
		for (const [, value] of this.#outgoing) yield value[1];
	}
	/**
	* Marks the cookies as consumed and returns the header values.
	* After consumption, any subsequent `set()` calls will warn.
	*/
	consume() {
		this.#consumed = true;
		return this.headers();
	}
	/**
	* @deprecated Use the instance method `cookies.consume()` instead.
	* Kept for backward compatibility with adapters.
	*/
	static consume(cookies) {
		return cookies.consume();
	}
	#ensureParsed() {
		if (!this.#requestValues) this.#parse();
		if (!this.#requestValues) this.#requestValues = /* @__PURE__ */ Object.create(null);
		return this.#requestValues;
	}
	#ensureOutgoingMap() {
		if (!this.#outgoing) this.#outgoing = /* @__PURE__ */ new Map();
		return this.#outgoing;
	}
	#parse() {
		const raw = this.#request.headers.get("cookie");
		if (!raw) return;
		this.#requestValues = parse$1(raw, { decode: identity });
	}
};
//#endregion
//#region node_modules/astro/dist/core/cookies/response.js
var astroCookiesSymbol = /* @__PURE__ */ Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
	Reflect.set(response, astroCookiesSymbol, cookies);
}
function getCookiesFromResponse(response) {
	let cookies = Reflect.get(response, astroCookiesSymbol);
	if (cookies != null) return cookies;
	else return;
}
function* getSetCookiesFromResponse(response) {
	const cookies = getCookiesFromResponse(response);
	if (!cookies) return [];
	for (const headerValue of cookies.consume()) yield headerValue;
	return [];
}
//#endregion
//#region node_modules/astro/dist/actions/noop-actions.js
var NOOP_ACTIONS_MOD = { server: {} };
//#endregion
//#region node_modules/astro/dist/core/middleware/defineMiddleware.js
function defineMiddleware(fn) {
	return fn;
}
//#endregion
//#region node_modules/astro/dist/core/app/origin-check.js
var FORM_CONTENT_TYPES = [
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
];
var SAFE_METHODS = [
	"GET",
	"HEAD",
	"OPTIONS"
];
function isForbiddenCrossOriginRequest(request, url, isPrerendered) {
	if (isPrerendered) return false;
	if (SAFE_METHODS.includes(request.method)) return false;
	const isSameOrigin = request.headers.get("origin") === url.origin;
	if (request.headers.has("content-type")) return hasFormLikeHeader(request.headers.get("content-type")) && !isSameOrigin;
	return !isSameOrigin;
}
function createCrossOriginForbiddenResponse(request) {
	return new Response(`Cross-site ${request.method} form submissions are forbidden`, { status: 403 });
}
function createOriginCheckMiddleware() {
	return defineMiddleware((context, next) => {
		const { request, url, isPrerendered } = context;
		if (isForbiddenCrossOriginRequest(request, url, isPrerendered)) return createCrossOriginForbiddenResponse(request);
		return next();
	});
}
function hasFormLikeHeader(contentType) {
	if (contentType) {
		for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES) if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE)) return true;
	}
	return false;
}
//#endregion
//#region node_modules/astro/dist/core/middleware/noop-middleware.js
var NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
	return await next();
};
//#endregion
//#region node_modules/astro/dist/core/request.js
function createRequest({ url, headers, method = "GET", body = void 0, logger, isPrerendered = false, routePattern, init }) {
	const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(Object.entries(headers).filter(([name]) => !name.startsWith(":")));
	if (typeof url === "string") url = new URL(url);
	if (isPrerendered) url.search = "";
	const request = new Request(url, {
		method,
		headers: headersObj,
		body: isPrerendered ? null : body,
		...init
	});
	if (isPrerendered) {
		let _headers = request.headers;
		const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
		Object.defineProperty(request, "headers", {
			...headersDesc,
			get() {
				logger.warn(null, `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`);
				return _headers;
			},
			set(newHeaders) {
				_headers = newHeaders;
			}
		});
	}
	return request;
}
//#endregion
//#region node_modules/astro/dist/core/util/pathname.js
var MultiLevelEncodingError = class extends Error {
	constructor() {
		super("URL encoding depth exceeded the maximum number of decode iterations");
		this.name = "MultiLevelEncodingError";
	}
};
var MAX_DECODE_ITERATIONS = 10;
function validateAndDecodePathname(pathname) {
	let decoded;
	try {
		decoded = decodeURI(pathname);
	} catch (_e) {
		throw new Error("Invalid URL encoding");
	}
	let iterations = 0;
	while (decoded !== pathname) {
		if (iterations >= MAX_DECODE_ITERATIONS) throw new MultiLevelEncodingError();
		pathname = decoded;
		try {
			decoded = decodeURI(pathname);
		} catch {
			break;
		}
		iterations++;
	}
	return decoded;
}
//#endregion
//#region node_modules/astro/dist/template/4xx.js
function template({ title, pathname, statusCode = 404, tabTitle, body }) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
//#endregion
//#region node_modules/astro/dist/core/routing/internal/astro-designed-error-pages.js
var DEFAULT_404_ROUTE = {
	component: DEFAULT_404_COMPONENT,
	params: [],
	pattern: /^\/404\/?$/,
	prerender: false,
	pathname: "/404",
	segments: [[{
		content: "404",
		dynamic: false,
		spread: false
	}]],
	type: "page",
	route: "/404",
	fallbackRoutes: [],
	isIndex: false,
	origin: "internal",
	distURL: []
};
async function default404Page({ pathname }) {
	return new Response(template({
		statusCode: 404,
		title: "Not found",
		tabTitle: "404: Not Found",
		pathname
	}), {
		status: 404,
		headers: { "Content-Type": "text/html" }
	});
}
default404Page.isAstroComponentFactory = true;
var default404Instance = { default: default404Page };
//#endregion
//#region node_modules/astro/dist/core/routing/rewrite.js
function findRouteToRewrite({ payload, routes, request, trailingSlash, buildFormat, base, outDir }) {
	let newUrl = void 0;
	if (payload instanceof URL) newUrl = payload;
	else if (payload instanceof Request) newUrl = new URL(payload.url);
	else newUrl = new URL(collapseDuplicateSlashes(payload), new URL(request.url).origin);
	const { pathname, resolvedUrlPathname } = normalizeRewritePathname(newUrl.pathname, base, trailingSlash, buildFormat);
	newUrl.pathname = resolvedUrlPathname;
	const decodedPathname = validateAndDecodePathname(pathname);
	if (isRoute404(decodedPathname)) {
		const errorRoute = routes.find((route) => route.route === "/404");
		if (errorRoute) return {
			routeData: errorRoute,
			newUrl,
			pathname: decodedPathname
		};
	}
	if (isRoute500(decodedPathname)) {
		const errorRoute = routes.find((route) => route.route === "/500");
		if (errorRoute) return {
			routeData: errorRoute,
			newUrl,
			pathname: decodedPathname
		};
	}
	let foundRoute;
	for (const route of routes) if (route.pattern.test(decodedPathname)) {
		if (route.params && route.params.length !== 0 && route.distURL && route.distURL.length !== 0) {
			if (!route.distURL.find((url) => url.href.replace(outDir.toString(), "").replace(/(?:\/index\.html|\.html)$/, "") === trimSlashes(pathname))) continue;
		}
		foundRoute = route;
		break;
	}
	if (foundRoute) return {
		routeData: foundRoute,
		newUrl,
		pathname: decodedPathname
	};
	else {
		const custom404 = routes.find((route) => route.route === "/404");
		if (custom404) return {
			routeData: custom404,
			newUrl,
			pathname
		};
		else return {
			routeData: DEFAULT_404_ROUTE,
			newUrl,
			pathname
		};
	}
}
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
	if (oldRequest.bodyUsed) throw new AstroError(RewriteWithBodyUsed);
	return createRequest({
		url: newUrl,
		method: oldRequest.method,
		body: oldRequest.body,
		isPrerendered,
		logger,
		headers: isPrerendered ? {} : oldRequest.headers,
		routePattern,
		init: {
			referrer: oldRequest.referrer,
			referrerPolicy: oldRequest.referrerPolicy,
			mode: oldRequest.mode,
			credentials: oldRequest.credentials,
			cache: oldRequest.cache,
			redirect: oldRequest.redirect,
			integrity: oldRequest.integrity,
			signal: oldRequest.signal,
			keepalive: oldRequest.keepalive,
			duplex: "half"
		}
	});
}
function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
	if (!pathname) pathname = "/";
	const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
	let finalPathname;
	if (pathname === "/") finalPathname = "/";
	else if (shouldAppendSlash) finalPathname = appendForwardSlash(pathname);
	else finalPathname = removeTrailingForwardSlash(pathname);
	Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}
function getOriginPathname(request) {
	const origin = Reflect.get(request, originPathnameSymbol);
	if (origin) return decodeURIComponent(origin);
	return new URL(request.url).pathname;
}
function normalizeRewritePathname(urlPathname, base, trailingSlash, buildFormat) {
	let pathname = collapseDuplicateSlashes(urlPathname);
	const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
	if (base !== "/") {
		if (urlPathname === base || urlPathname === removeTrailingForwardSlash(base)) pathname = "/";
		else if (urlPathname.startsWith(base)) {
			pathname = shouldAppendSlash ? appendForwardSlash(urlPathname) : removeTrailingForwardSlash(urlPathname);
			pathname = pathname.slice(base.length);
		}
	}
	if (!pathname.startsWith("/") && shouldAppendSlash && urlPathname.endsWith("/")) pathname = prependForwardSlash(pathname);
	if (buildFormat === "file") pathname = pathname.replace(/\.html$/, "");
	let resolvedUrlPathname;
	if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash) resolvedUrlPathname = removeTrailingForwardSlash(base);
	else resolvedUrlPathname = joinPaths(...[base, pathname].filter(Boolean));
	return {
		pathname,
		resolvedUrlPathname
	};
}
//#endregion
//#region node_modules/astro/dist/core/middleware/sequence.js
function sequence(...handlers) {
	const filtered = handlers.filter((h) => !!h);
	const length = filtered.length;
	if (!length) return defineMiddleware((_context, next) => {
		return next();
	});
	return defineMiddleware((context, next) => {
		let carriedPayload = void 0;
		return applyHandle(0, context);
		function applyHandle(i, handleContext) {
			const handle = filtered[i];
			return handle(handleContext, async (payload) => {
				if (i < length - 1) {
					if (payload) {
						let newRequest;
						if (payload instanceof Request) newRequest = payload;
						else if (payload instanceof URL) newRequest = new Request(payload, handleContext.request.clone());
						else newRequest = new Request(new URL(payload, handleContext.url.origin), handleContext.request.clone());
						const oldPathname = handleContext.url.pathname;
						const pipeline = Reflect.get(handleContext, pipelineSymbol);
						const { routeData, pathname } = await pipeline.tryRewrite(payload, handleContext.request);
						if (pipeline.manifest.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) throw new AstroError({
							...ForbiddenRewrite,
							message: ForbiddenRewrite.message(handleContext.url.pathname, pathname, routeData.component),
							hint: ForbiddenRewrite.hint(routeData.component)
						});
						carriedPayload = payload;
						handleContext.request = newRequest;
						handleContext.url = new URL(newRequest.url);
						handleContext.params = getParams(routeData, pathname);
						handleContext.routePattern = routeData.route;
						setOriginPathname(handleContext.request, oldPathname, pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat);
					}
					return applyHandle(i + 1, handleContext);
				} else return next(payload ?? carriedPayload);
			});
		}
	});
}
//#endregion
//#region node_modules/astro/dist/core/redirects/component.js
var RedirectComponentInstance = { default() {
	return new Response(null, { status: 301 });
} };
var RedirectSinglePageBuiltModule = {
	page: () => Promise.resolve(RedirectComponentInstance),
	onRequest: (_, next) => next()
};
//#endregion
//#region node_modules/astro/dist/core/routing/generator.js
function sanitizeParams(params) {
	return Object.fromEntries(Object.entries(params).map(([key, value]) => {
		if (typeof value === "string") return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
		return [key, value];
	}));
}
function getParameter(part, params) {
	if (part.spread) return params[part.content.slice(3)] ?? "";
	if (part.dynamic) {
		if (params[part.content] === void 0) throw new TypeError(`Missing parameter: ${part.content}`);
		return params[part.content];
	}
	return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
	const segmentPath = segment.map((part) => getParameter(part, params)).join("");
	return segmentPath ? collapseDuplicateLeadingSlashes("/" + segmentPath) : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
	return (params) => {
		const sanitizedParams = sanitizeParams(params);
		let trailing = "";
		if (addTrailingSlash === "always" && segments.length) trailing = "/";
		return segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing || "/";
	};
}
//#endregion
//#region node_modules/astro/dist/core/routing/internal/validation.js
var VALID_PARAM_TYPES = ["string", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
	if (!VALID_PARAM_TYPES.includes(typeof value)) throw new AstroError({
		...GetStaticPathsInvalidRouteParam,
		message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
		location: { file: route }
	});
}
//#endregion
//#region node_modules/astro/dist/core/routing/params.js
function stringifyParams(params, route, trailingSlash) {
	const validatedParams = {};
	for (const [key, value] of Object.entries(params)) {
		validateGetStaticPathsParameter([key, value], route.component);
		if (value !== void 0) validatedParams[key] = trimSlashes(value);
	}
	return getRouteGenerator(route.segments, trailingSlash)(validatedParams);
}
//#endregion
//#region node_modules/astro/dist/core/routing/validation.js
function validateDynamicRouteModule(mod, { ssr, route }) {
	if ((!ssr || route.prerender) && route.origin !== "internal" && !mod.getStaticPaths) throw new AstroError({
		...GetStaticPathsRequired,
		location: { file: route.component }
	});
}
function validateGetStaticPathsResult(result, route) {
	if (!Array.isArray(result)) throw new AstroError({
		...InvalidGetStaticPathsReturn,
		message: InvalidGetStaticPathsReturn.message(typeof result),
		location: { file: route.component }
	});
	result.forEach((pathObject) => {
		if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) throw new AstroError({
			...InvalidGetStaticPathsEntry,
			message: InvalidGetStaticPathsEntry.message(Array.isArray(pathObject) ? "array" : typeof pathObject)
		});
		if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) throw new AstroError({
			...GetStaticPathsExpectedParams,
			location: { file: route.component }
		});
	});
}
//#endregion
//#region node_modules/astro/dist/core/render/paginate.js
function generatePaginateFunction(routeMatch, base, trailingSlash) {
	return function paginateUtility(data, args = {}) {
		const generate = getRouteGenerator(routeMatch.segments, trailingSlash);
		let { pageSize: _pageSize, params: _params, props: _props } = args;
		const pageSize = _pageSize || 10;
		const paramName = "page";
		const additionalParams = _params || {};
		const additionalProps = _props || {};
		let includesFirstPageNumber;
		if (routeMatch.params.includes(`...${paramName}`)) includesFirstPageNumber = false;
		else if (routeMatch.params.includes(`${paramName}`)) includesFirstPageNumber = true;
		else throw new AstroError({
			...PageNumberParamNotFound,
			message: PageNumberParamNotFound.message(paramName)
		});
		const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
		return [...Array(lastPage).keys()].map((num) => {
			const pageNum = num + 1;
			const start = pageSize === Number.POSITIVE_INFINITY ? 0 : (pageNum - 1) * pageSize;
			const end = Math.min(start + pageSize, data.length);
			const params = {
				...additionalParams,
				[paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
			};
			const current = addRouteBase(generate({ ...params }), base);
			const next = pageNum === lastPage ? void 0 : addRouteBase(generate({
				...params,
				page: String(pageNum + 1)
			}), base);
			const prev = pageNum === 1 ? void 0 : addRouteBase(generate({
				...params,
				page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
			}), base);
			const first = pageNum === 1 ? void 0 : addRouteBase(generate({
				...params,
				page: includesFirstPageNumber ? "1" : void 0
			}), base);
			const last = pageNum === lastPage ? void 0 : addRouteBase(generate({
				...params,
				page: String(lastPage)
			}), base);
			return {
				params,
				props: {
					...additionalProps,
					page: {
						data: data.slice(start, end),
						start,
						end: end - 1,
						size: pageSize,
						total: data.length,
						currentPage: pageNum,
						lastPage,
						url: {
							current,
							next,
							prev,
							first,
							last
						}
					}
				}
			};
		});
	};
}
function addRouteBase(route, base) {
	let routeWithBase = joinPaths(base, route);
	if (routeWithBase === "") routeWithBase = "/";
	return routeWithBase;
}
//#endregion
//#region node_modules/astro/dist/core/render/route-cache.js
async function callGetStaticPaths({ mod, route, routeCache, ssr, base, trailingSlash }) {
	const cached = routeCache.get(route);
	if (!mod) throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
	if (cached?.staticPaths && cached.mod === mod) return cached.staticPaths;
	validateDynamicRouteModule(mod, {
		ssr,
		route
	});
	if (ssr && !route.prerender || route.origin === "internal") {
		const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
		routeCache.set(route, {
			...cached,
			mod,
			staticPaths: entry
		});
		return entry;
	}
	let staticPaths = [];
	if (!mod.getStaticPaths) throw new Error("Unexpected Error.");
	staticPaths = await mod.getStaticPaths({
		paginate: generatePaginateFunction(route, base, trailingSlash),
		routePattern: route.route
	});
	validateGetStaticPathsResult(staticPaths, route);
	const keyedStaticPaths = staticPaths;
	keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
	for (const sp of keyedStaticPaths) {
		const paramsKey = stringifyParams(sp.params, route, trailingSlash);
		keyedStaticPaths.keyed.set(paramsKey, sp);
	}
	routeCache.set(route, {
		...cached,
		mod,
		staticPaths: keyedStaticPaths
	});
	return keyedStaticPaths;
}
var RouteCache = class {
	logger;
	cache = {};
	runtimeMode;
	constructor(logger, runtimeMode = "production") {
		this.logger = logger;
		this.runtimeMode = runtimeMode;
	}
	/** Clear the cache. */
	clearAll() {
		this.cache = {};
	}
	set(route, entry) {
		const key = this.key(route);
		if (this.runtimeMode === "production" && this.cache[key]?.staticPaths) this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
		this.cache[key] = entry;
	}
	get(route) {
		return this.cache[this.key(route)];
	}
	key(route) {
		return `${route.route}_${route.component}`;
	}
};
function findPathItemByKey(staticPaths, params, route, logger, trailingSlash) {
	const paramsKey = stringifyParams(params, route, trailingSlash);
	const matchedStaticPath = staticPaths.keyed.get(paramsKey);
	if (matchedStaticPath) return matchedStaticPath;
	logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
//#endregion
//#region node_modules/astro/dist/core/routing/pattern.js
function getPattern(segments, base, addTrailingSlash) {
	const pathname = segments.map((segment) => {
		if (segment.length === 1 && segment[0].spread) return "(?:\\/(.*?))?";
		else return "\\/" + segment.map((part) => {
			if (part.spread) return "(.*?)";
			else if (part.dynamic) return "([^/]+?)";
			else return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}).join("");
	}).join("");
	const trailing = addTrailingSlash && segments.length ? getTrailingSlashPattern(addTrailingSlash) : "$";
	let initial = "\\/";
	if (addTrailingSlash === "never" && base !== "/" && pathname !== "") initial = "";
	return new RegExp(`^${pathname || initial}${trailing}`);
}
function getTrailingSlashPattern(addTrailingSlash) {
	if (addTrailingSlash === "always") return "\\/$";
	if (addTrailingSlash === "never") return "$";
	return "\\/?$";
}
//#endregion
//#region node_modules/astro/dist/core/server-islands/endpoint.js
var SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
var SERVER_ISLAND_COMPONENT = "_server-islands.astro";
function badRequest(reason) {
	return new Response(null, {
		status: 400,
		statusText: "Bad request: " + reason
	});
}
var DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024;
async function getRequestData(request, bodySizeLimit = DEFAULT_BODY_SIZE_LIMIT) {
	switch (request.method) {
		case "GET": {
			const params = new URL(request.url).searchParams;
			if (!params.has("s") || !params.has("e") || !params.has("p")) return badRequest("Missing required query parameters.");
			const encryptedSlots = params.get("s");
			return {
				encryptedComponentExport: params.get("e"),
				encryptedProps: params.get("p"),
				encryptedSlots
			};
		}
		case "POST": try {
			const body = await readBodyWithLimit(request, bodySizeLimit);
			const raw = new TextDecoder().decode(body);
			const data = JSON.parse(raw);
			if (Object.hasOwn(data, "slots") && typeof data.slots === "object") return badRequest("Plaintext slots are not allowed. Slots must be encrypted.");
			if (Object.hasOwn(data, "componentExport") && typeof data.componentExport === "string") return badRequest("Plaintext componentExport is not allowed. componentExport must be encrypted.");
			return data;
		} catch (e) {
			if (e instanceof BodySizeLimitError) return new Response(null, {
				status: 413,
				statusText: e.message
			});
			if (e instanceof SyntaxError) return badRequest("Request format is invalid.");
			throw e;
		}
		default: return new Response(null, { status: 405 });
	}
}
function createEndpoint(manifest) {
	const page = async (result) => {
		const params = result.params;
		if (!params.name) return new Response(null, {
			status: 400,
			statusText: "Bad request"
		});
		const componentId = params.name;
		const data = await getRequestData(result.request, manifest.serverIslandBodySizeLimit);
		if (data instanceof Response) return data;
		let imp = (await (await manifest.serverIslandMappings?.())?.serverIslandMap)?.get(componentId);
		if (!imp) return new Response(null, {
			status: 404,
			statusText: "Not found"
		});
		const key = await manifest.key;
		let componentExport;
		try {
			componentExport = await decryptString(key, data.encryptedComponentExport, `export:${componentId}`);
		} catch (_e) {
			return badRequest("Encrypted componentExport value is invalid.");
		}
		const encryptedProps = data.encryptedProps;
		let props = {};
		if (encryptedProps !== "") try {
			const propString = await decryptString(key, encryptedProps, `props:${componentId}`);
			props = JSON.parse(propString);
		} catch (_e) {
			return badRequest("Encrypted props value is invalid.");
		}
		let decryptedSlots = {};
		const encryptedSlots = data.encryptedSlots;
		if (encryptedSlots !== "") try {
			const slotsString = await decryptString(key, encryptedSlots, `slots:${componentId}`);
			decryptedSlots = JSON.parse(slotsString);
		} catch (_e) {
			return badRequest("Encrypted slots value is invalid.");
		}
		let Component = (await imp())[componentExport];
		const slots = {};
		for (const prop in decryptedSlots) slots[prop] = createSlotValueFromString(decryptedSlots[prop]);
		result.response.headers.set("X-Robots-Tag", "noindex");
		if (isAstroComponentFactory(Component)) {
			const ServerIsland = Component;
			Component = function(...args) {
				return ServerIsland.apply(this, args);
			};
			Object.assign(Component, ServerIsland);
			Component.propagation = "self";
		}
		return renderTemplate`${renderComponent(result, "Component", Component, props, slots)}`;
	};
	page.isAstroComponentFactory = true;
	return {
		default: page,
		partial: true
	};
}
//#endregion
//#region node_modules/astro/dist/core/routing/default.js
function createDefaultRoutes(manifest) {
	const root = new URL(manifest.rootDir);
	return [{
		instance: default404Instance,
		matchesComponent: (filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href,
		route: DEFAULT_404_ROUTE.route,
		component: DEFAULT_404_COMPONENT
	}, {
		instance: createEndpoint(manifest),
		matchesComponent: (filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href,
		route: SERVER_ISLAND_ROUTE,
		component: SERVER_ISLAND_COMPONENT
	}];
}
//#endregion
//#region node_modules/astro/dist/core/routing/astro-designed-error-pages.js
function ensure404Route(manifest) {
	if (!manifest.routes.some((route) => route.route === "/404")) manifest.routes.push(DEFAULT_404_ROUTE);
	return manifest;
}
//#endregion
//#region node_modules/astro/dist/core/routing/helpers.js
function routeIsRedirect(route) {
	return route?.type === "redirect";
}
function routeIsFallback(route) {
	return route?.type === "fallback";
}
function getFallbackRoute(route, routeList) {
	const fallbackRoute = routeList.find((r) => {
		if (route.route === "/" && r.routeData.route === "/") return true;
		return r.routeData.fallbackRoutes.find((f) => {
			return f.route === route.route;
		});
	});
	if (!fallbackRoute) throw new Error(`No fallback route found for route ${route.route}`);
	return fallbackRoute.routeData;
}
function getCustom404Route(manifestData) {
	return manifestData.routes.find((r) => isRoute404(r.route));
}
function routeHasHtmlExtension(route) {
	return route.segments.some((segment) => segment.some((part) => !part.dynamic && part.content.includes(".html")));
}
//#endregion
//#region node_modules/astro/dist/core/render/params-and-props.js
async function getProps(opts) {
	const { logger, mod, routeData: route, routeCache, pathname, serverLike, base, trailingSlash } = opts;
	if (!route || route.pathname) return {};
	if (routeIsRedirect(route) || routeIsFallback(route) || route.component === "astro-default-404.astro") return {};
	const staticPaths = await callGetStaticPaths({
		mod,
		route,
		routeCache,
		ssr: serverLike,
		base,
		trailingSlash
	});
	const params = getParams(route, pathname);
	const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger, trailingSlash);
	if (!matchedStaticPath && route.origin !== "internal" && (serverLike ? route.prerender : true)) throw new AstroError({
		...NoMatchingStaticPathFound,
		message: NoMatchingStaticPathFound.message(pathname),
		hint: NoMatchingStaticPathFound.hint([route.component])
	});
	if (mod) validatePrerenderEndpointCollision(route, mod, params);
	return matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
}
function getParams(route, pathname) {
	if (!route.params.length) return {};
	const path = pathname.endsWith(".html") && route.type === "page" && !routeHasHtmlExtension(route) ? pathname.slice(0, -5) : pathname;
	const paramsMatch = [route, ...route.fallbackRoutes].map((r) => r.pattern).map((pattern) => pattern.exec(path)).find((x) => x);
	if (!paramsMatch) return {};
	const params = {};
	route.params.forEach((key, i) => {
		if (key.startsWith("...")) params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
		else params[key] = paramsMatch[i + 1];
	});
	return params;
}
function validatePrerenderEndpointCollision(route, mod, params) {
	if (route.type === "endpoint" && mod.getStaticPaths) {
		const lastSegment = route.segments[route.segments.length - 1];
		const paramValues = Object.values(params);
		const lastParam = paramValues[paramValues.length - 1];
		if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) throw new AstroError({
			...PrerenderDynamicEndpointPathCollide,
			message: PrerenderDynamicEndpointPathCollide.message(route.route),
			hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
			location: { file: route.component }
		});
	}
}
//#endregion
//#region node_modules/astro/dist/core/routing/priority.js
function routeComparator(a, b) {
	const commonLength = Math.min(a.segments.length, b.segments.length);
	for (let index = 0; index < commonLength; index++) {
		const aSegment = a.segments[index];
		const bSegment = b.segments[index];
		const aIsStatic = aSegment.every((part) => !part.dynamic && !part.spread);
		const bIsStatic = bSegment.every((part) => !part.dynamic && !part.spread);
		if (aIsStatic && bIsStatic) {
			const aContent = aSegment.map((part) => part.content).join("");
			const bContent = bSegment.map((part) => part.content).join("");
			if (aContent !== bContent) return aContent.localeCompare(bContent);
		}
		if (aIsStatic !== bIsStatic) return aIsStatic ? -1 : 1;
		const aAllDynamic = aSegment.every((part) => part.dynamic);
		if (aAllDynamic !== bSegment.every((part) => part.dynamic)) return aAllDynamic ? 1 : -1;
		const aHasSpread = aSegment.some((part) => part.spread);
		if (aHasSpread !== bSegment.some((part) => part.spread)) return aHasSpread ? 1 : -1;
	}
	const aLength = a.segments.length;
	const bLength = b.segments.length;
	if (aLength !== bLength) {
		const aEndsInRest = a.segments.at(-1)?.some((part) => part.spread);
		const bEndsInRest = b.segments.at(-1)?.some((part) => part.spread);
		if (aEndsInRest !== bEndsInRest && Math.abs(aLength - bLength) === 1) {
			if (aLength > bLength && aEndsInRest) return 1;
			if (bLength > aLength && bEndsInRest) return -1;
		}
		return aLength > bLength ? -1 : 1;
	}
	if (a.type === "endpoint" !== (b.type === "endpoint")) return a.type === "endpoint" ? -1 : 1;
	return a.route.localeCompare(b.route);
}
//#endregion
//#region node_modules/astro/dist/core/routing/router.js
var Router = class {
	#routes;
	#base;
	#baseWithoutTrailingSlash;
	#buildFormat;
	#trailingSlash;
	constructor(routes, options) {
		this.#routes = [...routes].sort(routeComparator);
		this.#base = normalizeBase(options.base);
		this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#base);
		this.#buildFormat = options.buildFormat;
		this.#trailingSlash = options.trailingSlash;
	}
	/**
	* Match an input pathname against the route list.
	* If allowWithoutBase is true, a non-base-prefixed path is still considered.
	*/
	match(inputPathname, { allowWithoutBase = false } = {}) {
		const normalized = getRedirectForPathname(inputPathname);
		if (normalized.redirect) return {
			type: "redirect",
			location: normalized.redirect,
			status: 301
		};
		if (this.#base !== "/") {
			const baseWithSlash = `${this.#baseWithoutTrailingSlash}/`;
			if (this.#trailingSlash === "always" && (normalized.pathname === this.#baseWithoutTrailingSlash || normalized.pathname === this.#base)) return {
				type: "redirect",
				location: baseWithSlash,
				status: 301
			};
			if (this.#trailingSlash === "never" && normalized.pathname === baseWithSlash) return {
				type: "redirect",
				location: this.#baseWithoutTrailingSlash,
				status: 301
			};
		}
		const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
		if (!baseResult) {
			if (!allowWithoutBase) return {
				type: "none",
				reason: "outside-base"
			};
		}
		let pathname = baseResult ?? normalized.pathname;
		if (this.#buildFormat === "file") pathname = normalizeFileFormatPathname(pathname);
		const route = this.#routes.find((candidate) => {
			if (candidate.pattern.test(pathname)) return true;
			return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
		});
		if (!route) return {
			type: "none",
			reason: "no-match"
		};
		return {
			type: "match",
			route,
			params: getParams(route, pathname),
			pathname
		};
	}
	/**
	* Returns all routes that match the given pathname, in priority order.
	* Used when the first match (e.g. a prerendered route) cannot serve
	* the request and subsequent matches need to be tried.
	*/
	matchAll(inputPathname, { allowWithoutBase = false } = {}) {
		const normalized = getRedirectForPathname(inputPathname);
		if (normalized.redirect) return [];
		const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
		if (!baseResult && !allowWithoutBase) return [];
		let pathname = baseResult ?? normalized.pathname;
		if (this.#buildFormat === "file") pathname = normalizeFileFormatPathname(pathname);
		return this.#routes.filter((candidate) => {
			if (candidate.pattern.test(pathname)) return true;
			return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
		});
	}
};
function normalizeBase(base) {
	if (!base) return "/";
	if (base === "/") return base;
	return prependForwardSlash(base);
}
function getRedirectForPathname(pathname) {
	let value = prependForwardSlash(pathname);
	if (value.startsWith("//")) return {
		pathname: value,
		redirect: `/${value.replace(/^\/+/, "")}`
	};
	return { pathname: value };
}
function stripBase(pathname, base, baseWithoutTrailingSlash, trailingSlash) {
	if (base === "/") return pathname;
	const baseWithSlash = `${baseWithoutTrailingSlash}/`;
	if (pathname === baseWithoutTrailingSlash || pathname === base) return trailingSlash === "always" ? null : "/";
	if (pathname === baseWithSlash) return trailingSlash === "never" ? null : "/";
	if (pathname.startsWith(baseWithSlash)) return pathname.slice(baseWithoutTrailingSlash.length);
	return null;
}
function normalizeFileFormatPathname(pathname) {
	if (pathname.endsWith("/index.html")) {
		const trimmed = pathname.slice(0, -11);
		return trimmed === "" ? "/" : trimmed;
	}
	if (pathname.endsWith(".html")) {
		const trimmed = pathname.slice(0, -5);
		return trimmed === "" ? "/" : trimmed;
	}
	return pathname;
}
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/object.js
var FORBIDDEN_PATH_KEYS = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
//#endregion
//#region node_modules/astro/dist/core/logger/core.js
var dateTimeFormat = new Intl.DateTimeFormat([], {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false
});
var levels = {
	debug: 20,
	info: 30,
	warn: 40,
	error: 50,
	silent: 90
};
function log(opts, level, label, message, newLine = true) {
	const logLevel = opts.level;
	const dest = opts.destination;
	const event = {
		label,
		level,
		message,
		newLine
	};
	if (!isLogLevelEnabled(logLevel, level)) return;
	dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
	return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
	return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
	return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
	return log(opts, "error", label, message, newLine);
}
function debug(...args) {
	if ("_astroGlobalDebug" in globalThis) globalThis._astroGlobalDebug(...args);
}
function getEventPrefix({ level, label }) {
	const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
	const prefix = [];
	if (level === "error" || level === "warn") {
		prefix.push(colors.bold(timestamp));
		prefix.push(`[${level.toUpperCase()}]`);
	} else prefix.push(timestamp);
	if (label) prefix.push(`[${label}]`);
	if (level === "error") return colors.red(prefix.join(" "));
	if (level === "warn") return colors.yellow(prefix.join(" "));
	if (prefix.length === 1) return colors.dim(prefix[0]);
	return colors.dim(prefix[0]) + " " + colors.blue(prefix.splice(1).join(" "));
}
var AstroLogger = class {
	options;
	constructor(options) {
		this.options = options;
	}
	info(label, message, newLine = true) {
		info(this.options, label, message, newLine);
	}
	warn(label, message, newLine = true) {
		warn(this.options, label, message, newLine);
	}
	error(label, message, newLine = true) {
		error(this.options, label, message, newLine);
	}
	debug(label, ...messages) {
		debug(label, ...messages);
	}
	level() {
		return this.options.level;
	}
	forkIntegrationLogger(label) {
		return new AstroIntegrationLogger(this.options, label);
	}
	setDestination(destination) {
		this.options.destination = destination;
	}
	/**
	* It calls the `close` function of the provided destination, if it exists.
	*/
	close() {
		if (this.options.destination.close) this.options.destination.close();
	}
	/**
	* It calls the `flush` function of the provided destination, if it exists.
	*/
	flush() {
		if (this.options.destination.flush) this.options.destination.flush();
	}
};
var AstroIntegrationLogger = class AstroIntegrationLogger {
	options;
	label;
	constructor(logging, label) {
		this.options = logging;
		this.label = label;
	}
	/**
	* Creates a new logger instance with a new label, but the same log options.
	*/
	fork(label) {
		return new AstroIntegrationLogger(this.options, label);
	}
	info(message) {
		info(this.options, this.label, message);
	}
	warn(message) {
		warn(this.options, this.label, message);
	}
	error(message) {
		error(this.options, this.label, message);
	}
	debug(message) {
		debug(this.label, message);
	}
	/**
	* It calls the `flush` function of the provided destination, if it exists.
	*/
	flush() {
		if (this.options.destination.flush) this.options.destination.flush();
	}
	/**
	* It calls the `close` function of the provided destination, if it exists.
	*/
	close() {
		if (this.options.destination.close) this.options.destination.close();
	}
};
//#endregion
//#region node_modules/astro/dist/core/logger/public.js
function matchesLevel(messageLevel, configuredLevel) {
	return levels[messageLevel] >= levels[configuredLevel];
}
//#endregion
//#region node_modules/astro/dist/core/logger/impls/node.js
function nodeLogDestination(config = {}) {
	const { level = "info" } = config;
	return { write(event) {
		let dest = process.stderr;
		if (levels[event.level] < levels["error"]) dest = process.stdout;
		if (!matchesLevel(event.level, level)) return;
		let trailingLine = event.newLine ? "\n" : "";
		if (event.label === "SKIP_FORMAT") dest.write(event.message + trailingLine);
		else dest.write(getEventPrefix(event) + " " + event.message + trailingLine);
	} };
}
function node_default(options) {
	return nodeLogDestination(options);
}
//#endregion
//#region node_modules/astro/dist/core/logger/impls/console.js
function consoleLogDestination(config = {}) {
	const { level = "info" } = config;
	return { write(event) {
		let dest = console.error;
		if (levels[event.level] < levels["error"]) dest = console.info;
		if (!matchesLevel(event.level, level)) return;
		if (event.label === "SKIP_FORMAT") dest(event.message);
		else dest(getEventPrefix(event) + " " + event.message);
	} };
}
function createConsoleLogger({ level }) {
	return new AstroLogger({
		level,
		destination: consoleLogDestination()
	});
}
function console_default(options) {
	return consoleLogDestination(options);
}
//#endregion
//#region node_modules/astro/dist/core/logger/impls/json.js
var SGR_REGEX = new RegExp(`${String.fromCharCode(27)}\\[[0-9;]*m`, "g");
function jsonLoggerDestination(config = {}) {
	const { pretty = false, level = "info" } = config;
	return { write(event) {
		let dest = process.stderr;
		if (levels[event.level] < levels["error"]) dest = process.stdout;
		if (!matchesLevel(event.level, level)) return;
		let trailingLine = event.newLine ? "\n" : "";
		const message = event.message.replace(SGR_REGEX, "");
		if (pretty) dest.write(JSON.stringify({
			message,
			label: event.label,
			level: event.level
		}, null, 2) + trailingLine);
		else dest.write(JSON.stringify({
			message,
			label: event.label,
			level: event.level
		}) + trailingLine);
	} };
}
//#endregion
//#region node_modules/astro/dist/core/logger/impls/compose.js
function compose(destinations) {
	return {
		write(chunk) {
			for (const logger of destinations) logger.write(chunk);
		},
		flush() {
			for (const logger of destinations) if (logger.flush) logger.flush();
		},
		close() {
			for (const logger of destinations) if (logger.close) logger.close();
		}
	};
}
//#endregion
//#region node_modules/astro/dist/core/logger/load.js
async function loadLogger(config, level = "info") {
	let cause = void 0;
	try {
		switch (config.entrypoint) {
			case "astro/logger/node": return new AstroLogger({
				destination: node_default(config.config),
				level
			});
			case "astro/logger/console": return new AstroLogger({
				destination: console_default(config.config),
				level
			});
			case "astro/logger/json": return new AstroLogger({
				destination: jsonLoggerDestination(config.config),
				level
			});
			case "astro/logger/compose": {
				let destinations = [];
				if (config.config?.loggers) {
					const loggers = config.config?.loggers;
					destinations = await Promise.all(loggers.map(async (loggerConfig) => {
						return (await import(
							/* @vite-ignore */
							loggerConfig.entrypoint
)).default(loggerConfig.config);
					}));
				}
				return new AstroLogger({
					destination: compose(destinations),
					level
				});
			}
			default: return new AstroLogger({
				destination: (await import(
					/* @vite-ignore */
					config.entrypoint
)).default(config.config),
				level
			});
		}
	} catch (e) {
		if (e instanceof Error) cause = e;
	}
	const error = new AstroError({
		...UnableToLoadLogger,
		message: UnableToLoadLogger.message(config.entrypoint)
	});
	if (cause) error.cause = cause;
	throw error;
}
//#endregion
//#region node_modules/astro/dist/core/base-pipeline.js
var PipelineFeatures = {
	redirects: 1,
	sessions: 2,
	actions: 4,
	middleware: 8,
	i18n: 16,
	cache: 32
};
var ALL_PIPELINE_FEATURES = PipelineFeatures.redirects | PipelineFeatures.sessions | PipelineFeatures.actions | PipelineFeatures.middleware | PipelineFeatures.i18n | PipelineFeatures.cache;
var Pipeline = class {
	internalMiddleware;
	resolvedMiddleware = void 0;
	resolvedLogger = false;
	resolvedActions = void 0;
	resolvedSessionDriver = void 0;
	resolvedCacheProvider = void 0;
	compiledCacheRoutes = void 0;
	/**
	* Bit mask of pipeline features activated by handler classes.
	* Each handler sets its bit via `|=`. Only meaningful when a
	* custom `src/fetch.ts` fetch handler is in use.
	*/
	usedFeatures = 0;
	logger;
	manifest;
	/**
	* "development" or "production" only
	*/
	runtimeMode;
	renderers;
	resolve;
	streaming;
	/**
	* Used to provide better error messages for `Astro.clientAddress`
	*/
	adapterName;
	clientDirectives;
	inlinedScripts;
	compressHTML;
	i18n;
	middleware;
	routeCache;
	/**
	* Used for `Astro.site`.
	*/
	site;
	/**
	* Array of built-in, internal, routes.
	* Used to find the route module
	*/
	defaultRoutes;
	actions;
	sessionDriver;
	cacheProvider;
	cacheConfig;
	serverIslands;
	/** Route data derived from the manifest, used for route matching. */
	manifestData;
	/** Pattern-matching router built from manifestData. */
	#router;
	constructor(logger, manifest, runtimeMode, renderers, resolve, streaming, adapterName = manifest.adapterName, clientDirectives = manifest.clientDirectives, inlinedScripts = manifest.inlinedScripts, compressHTML = manifest.compressHTML, i18n = manifest.i18n, middleware = manifest.middleware, routeCache = new RouteCache(logger, runtimeMode), site = manifest.site ? new URL(manifest.site) : void 0, defaultRoutes = createDefaultRoutes(manifest), actions = manifest.actions, sessionDriver = manifest.sessionDriver, cacheProvider = manifest.cacheProvider, cacheConfig = manifest.cacheConfig, serverIslands = manifest.serverIslandMappings) {
		this.logger = logger;
		this.manifest = manifest;
		this.runtimeMode = runtimeMode;
		this.renderers = renderers;
		this.resolve = resolve;
		this.streaming = streaming;
		this.adapterName = adapterName;
		this.clientDirectives = clientDirectives;
		this.inlinedScripts = inlinedScripts;
		this.compressHTML = compressHTML;
		this.i18n = i18n;
		this.middleware = middleware;
		this.routeCache = routeCache;
		this.site = site;
		this.defaultRoutes = defaultRoutes;
		this.actions = actions;
		this.sessionDriver = sessionDriver;
		this.cacheProvider = cacheProvider;
		this.cacheConfig = cacheConfig;
		this.serverIslands = serverIslands;
		this.manifestData = { routes: (manifest.routes ?? []).map((route) => route.routeData) };
		ensure404Route(this.manifestData);
		this.#router = new Router(this.manifestData.routes, {
			base: manifest.base,
			trailingSlash: manifest.trailingSlash,
			buildFormat: manifest.buildFormat
		});
		this.internalMiddleware = [];
	}
	/**
	* Low-level route matching against the manifest routes. Returns the
	* matched `RouteData` or `undefined`. Does not filter prerendered
	* routes or check public assets — use `BaseApp.match()` for that.
	*/
	matchRoute(pathname) {
		const match = this.#router.match(pathname, { allowWithoutBase: true });
		if (match.type !== "match") return void 0;
		return match.route;
	}
	/**
	* Returns all routes matching the given pathname, in priority order.
	* Used when the first match cannot serve the request (e.g. a
	* prerendered dynamic route that doesn't cover this specific path)
	* and the caller needs to try subsequent matches.
	*/
	matchAllRoutes(pathname) {
		return this.#router.matchAll(pathname, { allowWithoutBase: true });
	}
	/**
	* Rebuilds the internal router after routes have been added or
	* removed (e.g. by the dev server on HMR).
	*/
	rebuildRouter() {
		this.#router = new Router(this.manifestData.routes, {
			base: this.manifest.base,
			trailingSlash: this.manifest.trailingSlash,
			buildFormat: this.manifest.buildFormat
		});
	}
	/**
	* Resolves the middleware from the manifest, and returns the `onRequest` function. If `onRequest` isn't there,
	* it returns a no-op function
	*/
	async getMiddleware() {
		if (this.resolvedMiddleware) return this.resolvedMiddleware;
		if (this.middleware) {
			const internalMiddlewares = [(await this.middleware()).onRequest ?? NOOP_MIDDLEWARE_FN];
			if (this.manifest.checkOrigin) internalMiddlewares.unshift(createOriginCheckMiddleware());
			this.resolvedMiddleware = sequence(...internalMiddlewares);
			return this.resolvedMiddleware;
		} else {
			this.resolvedMiddleware = NOOP_MIDDLEWARE_FN;
			return this.resolvedMiddleware;
		}
	}
	/**
	* Clears the cached middleware so it is re-resolved on the next request.
	* Called via HMR when middleware files change during development.
	*/
	clearMiddleware() {
		this.resolvedMiddleware = void 0;
	}
	/**
	* Resolves the logger destination from the manifest and updates the pipeline logger.
	* If the user configured `logger`, the bundled logger factory is loaded
	* and replaces the default console destination. This is lazy and only resolves once.
	*/
	async getLogger() {
		if (this.resolvedLogger) return this.logger;
		this.resolvedLogger = true;
		if (this.manifest.loggerConfig) this.logger = await loadLogger(this.manifest.loggerConfig);
		return this.logger;
	}
	async getActions() {
		if (this.resolvedActions) return this.resolvedActions;
		else if (this.actions) {
			this.resolvedActions = await this.actions();
			return this.resolvedActions;
		}
		return NOOP_ACTIONS_MOD;
	}
	async getSessionDriver() {
		if (this.resolvedSessionDriver !== void 0) return this.resolvedSessionDriver;
		if (this.sessionDriver) {
			const driverModule = await this.sessionDriver();
			this.resolvedSessionDriver = driverModule?.default || null;
			return this.resolvedSessionDriver;
		}
		this.resolvedSessionDriver = null;
		return null;
	}
	async getCacheProvider() {
		if (this.resolvedCacheProvider !== void 0) return this.resolvedCacheProvider;
		if (this.cacheProvider) {
			const factory = (await this.cacheProvider())?.default || null;
			this.resolvedCacheProvider = factory ? factory(this.cacheConfig?.options) : null;
			return this.resolvedCacheProvider;
		}
		this.resolvedCacheProvider = null;
		return null;
	}
	async getServerIslands() {
		if (this.serverIslands) return this.serverIslands();
		return {
			serverIslandMap: /* @__PURE__ */ new Map(),
			serverIslandNameMap: /* @__PURE__ */ new Map()
		};
	}
	async getAction(path) {
		const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
		let { server } = await this.getActions();
		if (!server || !(typeof server === "object")) throw new TypeError(`Expected \`server\` export in actions file to be an object. Received ${typeof server}.`);
		for (const key of pathKeys) {
			if (FORBIDDEN_PATH_KEYS.has(key)) throw new AstroError({
				...ActionNotFoundError,
				message: ActionNotFoundError.message(pathKeys.join("."))
			});
			if (!Object.hasOwn(server, key)) throw new AstroError({
				...ActionNotFoundError,
				message: ActionNotFoundError.message(pathKeys.join("."))
			});
			server = server[key];
		}
		if (typeof server !== "function") throw new TypeError(`Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server}.`);
		return server;
	}
	async getModuleForRoute(route) {
		for (const defaultRoute of this.defaultRoutes) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
		if (route.type === "redirect") return RedirectSinglePageBuiltModule;
		else {
			if (this.manifest.pageMap) {
				const importComponentInstance = this.manifest.pageMap.get(route.component);
				if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
				return await importComponentInstance();
			} else if (this.manifest.pageModule) return this.manifest.pageModule;
			throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
		}
	}
};
//#endregion
//#region node_modules/astro/dist/core/render/slots.js
function getFunctionExpression(slot) {
	if (!slot) return;
	const expressions = slot?.expressions?.filter((e) => isRenderInstruction(e) === false || isRenderTemplateResult(e));
	if (expressions?.length !== 1) return;
	const expression = expressions[0];
	if (isRenderTemplateResult(expression)) return getFunctionExpression(expression);
	return expression;
}
var Slots = class {
	#result;
	#slots;
	#logger;
	constructor(result, slots, logger) {
		this.#result = result;
		this.#slots = slots;
		this.#logger = logger;
		if (slots) for (const key of Object.keys(slots)) {
			if (this[key] !== void 0) throw new AstroError({
				...ReservedSlotName,
				message: ReservedSlotName.message(key)
			});
			Object.defineProperty(this, key, {
				get() {
					return true;
				},
				enumerable: true
			});
		}
	}
	has(name) {
		if (!this.#slots) return false;
		return Boolean(this.#slots[name]);
	}
	async render(name, args = []) {
		if (!this.#slots || !this.has(name)) return;
		const result = this.#result;
		if (!Array.isArray(args)) this.#logger.warn(null, `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as an item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
		else if (args.length > 0) {
			const slotValue = this.#slots[name];
			const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
			const expression = getFunctionExpression(component);
			if (expression) {
				const slot = async () => typeof expression === "function" ? expression(...args) : expression;
				return await renderSlotToString(result, slot).then((res) => {
					return res;
				});
			}
			if (typeof component === "function") return await renderJSX(result, component(...args)).then((res) => res != null ? String(res) : res);
		}
		return chunkToString(result, await renderSlotToString(result, this.#slots[name]));
	}
};
//#endregion
//#region node_modules/astro/dist/core/csp/runtime.js
function deduplicateDirectiveValues(existingDirective, newDirective) {
	const [directiveName, ...existingValues] = existingDirective.split(/\s+/).filter(Boolean);
	const [newDirectiveName, ...newValues] = newDirective.split(/\s+/).filter(Boolean);
	if (directiveName !== newDirectiveName) return;
	return `${directiveName} ${Array.from(/* @__PURE__ */ new Set([...existingValues, ...newValues])).join(" ")}`;
}
function pushDirective(directives, newDirective) {
	if (directives.length === 0) return [newDirective];
	const finalDirectives = [];
	let matched = false;
	for (const directive of directives) {
		if (matched) {
			finalDirectives.push(directive);
			continue;
		}
		const result = deduplicateDirectiveValues(directive, newDirective);
		if (result) {
			finalDirectives.push(result);
			matched = true;
		} else finalDirectives.push(directive);
	}
	if (!matched) finalDirectives.push(newDirective);
	return finalDirectives;
}
//#endregion
//#region node_modules/astro/dist/i18n/fallback.js
function computeFallbackRoute(options) {
	const { pathname, responseStatus, fallback, fallbackType, locales, defaultLocale, strategy, base } = options;
	if (responseStatus !== 404) return { type: "none" };
	if (!fallback || Object.keys(fallback).length === 0) return { type: "none" };
	const urlLocale = pathname.split("/").find((segment) => {
		for (const locale of locales) if (typeof locale === "string") {
			if (locale === segment) return true;
		} else if (locale.path === segment) return true;
		return false;
	});
	if (!urlLocale) return { type: "none" };
	if (!Object.keys(fallback).includes(urlLocale)) return { type: "none" };
	const fallbackLocale = fallback[urlLocale];
	const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
	let newPathname;
	if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") if (pathname.includes(`${base}`)) newPathname = pathname.replace(`/${urlLocale}`, ``);
	else newPathname = pathname.replace(`/${urlLocale}`, `/`);
	else newPathname = pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
	return {
		type: fallbackType,
		pathname: newPathname
	};
}
//#endregion
//#region node_modules/astro/dist/i18n/path.js
function pathHasLocale(path, locales) {
	const segments = path.split("/").map(normalizeThePath);
	for (const segment of segments) for (const locale of locales) if (typeof locale === "string") {
		if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) return true;
	} else if (segment === locale.path) return true;
	return false;
}
function normalizeTheLocale(locale) {
	return locale.replaceAll("_", "-").toLowerCase();
}
function normalizeThePath(path) {
	return path.endsWith(".html") ? path.slice(0, -5) : path;
}
//#endregion
//#region node_modules/astro/dist/i18n/router.js
var I18nRouter = class {
	#strategy;
	#defaultLocale;
	#locales;
	#base;
	#domains;
	constructor(options) {
		this.#strategy = options.strategy;
		this.#defaultLocale = options.defaultLocale;
		this.#locales = options.locales;
		this.#base = options.base === "/" ? "/" : removeTrailingForwardSlash(options.base || "");
		this.#domains = options.domains;
	}
	/**
	* Evaluate routing strategy for a pathname.
	* Returns decision object (not HTTP Response).
	*/
	match(pathname, context) {
		if (this.shouldSkipProcessing(pathname, context)) return { type: "continue" };
		switch (this.#strategy) {
			case "manual": return { type: "continue" };
			case "pathname-prefix-always": return this.matchPrefixAlways(pathname, context);
			case "domains-prefix-always":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixAlways(pathname, context);
			case "pathname-prefix-other-locales": return this.matchPrefixOtherLocales(pathname, context);
			case "domains-prefix-other-locales":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixOtherLocales(pathname, context);
			case "pathname-prefix-always-no-redirect": return this.matchPrefixAlwaysNoRedirect(pathname, context);
			case "domains-prefix-always-no-redirect":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixAlwaysNoRedirect(pathname, context);
			default: return { type: "continue" };
		}
	}
	/**
	* Check if i18n processing should be skipped for this request
	*/
	shouldSkipProcessing(pathname, context) {
		if (pathname.includes("/404") || pathname.includes("/500")) return true;
		if (pathname.includes("/_server-islands/")) return true;
		if (context.isReroute) return true;
		if (context.routeType && context.routeType !== "page" && context.routeType !== "fallback") return true;
		return false;
	}
	/**
	* Strategy: pathname-prefix-always
	* All locales must have a prefix, including the default locale.
	*/
	matchPrefixAlways(pathname, _context) {
		if (pathname === this.#base + "/" || pathname === this.#base) return {
			type: "redirect",
			location: `${this.#base === "/" ? "" : this.#base}/${this.#defaultLocale}`
		};
		if (!pathHasLocale(pathname, this.#locales)) return { type: "notFound" };
		return { type: "continue" };
	}
	/**
	* Strategy: pathname-prefix-other-locales
	* Default locale has no prefix, other locales must have a prefix.
	*/
	matchPrefixOtherLocales(pathname, _context) {
		let pathnameContainsDefaultLocale = false;
		for (const segment of pathname.split("/")) if (normalizeTheLocale(segment) === normalizeTheLocale(this.#defaultLocale)) {
			pathnameContainsDefaultLocale = true;
			break;
		}
		if (pathnameContainsDefaultLocale) return {
			type: "notFound",
			location: pathname.replace(`/${this.#defaultLocale}`, "")
		};
		return { type: "continue" };
	}
	/**
	* Strategy: pathname-prefix-always-no-redirect
	* Like prefix-always but allows root to serve instead of redirecting
	*/
	matchPrefixAlwaysNoRedirect(pathname, _context) {
		if (pathname === this.#base + "/" || pathname === this.#base) return { type: "continue" };
		if (!pathHasLocale(pathname, this.#locales)) return { type: "notFound" };
		return { type: "continue" };
	}
	/**
	* Check if the current locale doesn't belong to the configured domain.
	* Used for domain-based routing strategies.
	*/
	localeHasntDomain(currentLocale, currentDomain) {
		if (!this.#domains || !currentDomain) return false;
		if (!currentLocale) return false;
		const localesForDomain = this.#domains[currentDomain];
		if (!localesForDomain) return true;
		return !localesForDomain.includes(currentLocale);
	}
};
//#endregion
//#region node_modules/astro/dist/core/i18n/handler.js
var I18n = class {
	#i18n;
	#base;
	#trailingSlash;
	#format;
	#router;
	constructor(i18n, base, trailingSlash, format) {
		this.#i18n = i18n;
		this.#base = base;
		this.#trailingSlash = trailingSlash;
		this.#format = format;
		this.#router = new I18nRouter({
			strategy: i18n.strategy,
			defaultLocale: i18n.defaultLocale,
			locales: i18n.locales,
			base,
			domains: i18n.domainLookupTable ? Object.keys(i18n.domainLookupTable).reduce((acc, domain) => {
				const locale = i18n.domainLookupTable[domain];
				if (!acc[domain]) acc[domain] = [];
				acc[domain].push(locale);
				return acc;
			}, {}) : void 0
		});
	}
	async finalize(state, response) {
		state.pipeline.usedFeatures |= PipelineFeatures.i18n;
		const i18n = this.#i18n;
		if (state.skipErrorReroute && typeof i18n.fallback === "undefined") return response;
		if (state.responseRouteType !== "page" && state.responseRouteType !== "fallback") return response;
		const url = state.url;
		const currentLocale = state.computeCurrentLocale();
		const isPrerendered = state.routeData.prerender;
		const routerContext = {
			currentLocale,
			currentDomain: url.hostname,
			routeType: state.responseRouteType,
			isReroute: false
		};
		const routeDecision = this.#router.match(url.pathname, routerContext);
		switch (routeDecision.type) {
			case "redirect": {
				let location = routeDecision.location;
				if (shouldAppendForwardSlash(this.#trailingSlash, this.#format)) location = appendForwardSlash(location);
				return new Response(null, {
					status: routeDecision.status ?? 302,
					headers: { Location: location }
				});
			}
			case "notFound": {
				if (isPrerendered) {
					const prerenderedRes = new Response(response.body, {
						status: 404,
						headers: response.headers
					});
					state.skipErrorReroute = true;
					if (routeDecision.location) prerenderedRes.headers.set("Location", routeDecision.location);
					return prerenderedRes;
				}
				const headers = new Headers();
				if (routeDecision.location) headers.set("Location", routeDecision.location);
				return new Response(null, {
					status: 404,
					headers
				});
			}
			case "continue": break;
		}
		if (i18n.fallback && i18n.fallbackType) {
			const effectiveStatus = state.responseRouteType === "fallback" ? 404 : response.status;
			const fallbackDecision = computeFallbackRoute({
				pathname: url.pathname,
				responseStatus: effectiveStatus,
				currentLocale,
				fallback: i18n.fallback,
				fallbackType: i18n.fallbackType,
				locales: i18n.locales,
				defaultLocale: i18n.defaultLocale,
				strategy: i18n.strategy,
				base: this.#base
			});
			switch (fallbackDecision.type) {
				case "redirect": return new Response(null, {
					status: 302,
					headers: { Location: fallbackDecision.pathname + url.search }
				});
				case "rewrite": return await state.rewrite(fallbackDecision.pathname + url.search);
				case "none": break;
			}
		}
		return response;
	}
};
//#endregion
//#region node_modules/astro/dist/i18n/index.js
function getPathByLocale(locale, locales) {
	for (const loopLocale of locales) if (typeof loopLocale === "string") {
		if (loopLocale === locale) return loopLocale;
	} else for (const code of loopLocale.codes) if (code === locale) return loopLocale.path;
	throw new AstroError(i18nNoLocaleFoundInPath);
}
function getAllCodes(locales) {
	const result = [];
	for (const loopLocale of locales) if (typeof loopLocale === "string") result.push(loopLocale);
	else result.push(...loopLocale.codes);
	return result;
}
//#endregion
//#region node_modules/astro/dist/i18n/utils.js
function parseLocale(header) {
	if (header === "*") return [{
		locale: header,
		qualityValue: void 0
	}];
	const result = [];
	const localeValues = header.split(",").map((str) => str.trim());
	for (const localeValue of localeValues) {
		const split = localeValue.split(";").map((str) => str.trim());
		const localeName = split[0];
		const qualityValue = split[1];
		if (!split) continue;
		if (qualityValue && qualityValue.startsWith("q=")) {
			const qualityValueAsFloat = Number.parseFloat(qualityValue.slice(2));
			if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) result.push({
				locale: localeName,
				qualityValue: void 0
			});
			else result.push({
				locale: localeName,
				qualityValue: qualityValueAsFloat
			});
		} else result.push({
			locale: localeName,
			qualityValue: void 0
		});
	}
	return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
	const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
	return browserLocaleList.filter((browserLocale) => {
		if (browserLocale.locale !== "*") return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
		return true;
	}).sort((a, b) => {
		if (a.qualityValue && b.qualityValue) return Math.sign(b.qualityValue - a.qualityValue);
		return 0;
	});
}
function computePreferredLocale(request, locales) {
	const acceptHeader = request.headers.get("Accept-Language");
	let result = void 0;
	if (acceptHeader) {
		const firstResult = sortAndFilterLocales(parseLocale(acceptHeader), locales).at(0);
		if (firstResult && firstResult.locale !== "*") {
			outer: for (const currentLocale of locales) if (typeof currentLocale === "string") {
				if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
					result = currentLocale;
					break;
				}
			} else for (const currentCode of currentLocale.codes) if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
				result = currentCode;
				break outer;
			}
		}
	}
	return result;
}
function computePreferredLocaleList(request, locales) {
	const acceptHeader = request.headers.get("Accept-Language");
	let result = [];
	if (acceptHeader) {
		const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
		if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") return getAllCodes(locales);
		else if (browserLocaleList.length > 0) {
			for (const browserLocale of browserLocaleList) for (const loopLocale of locales) if (typeof loopLocale === "string") {
				if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) result.push(loopLocale);
			} else for (const code of loopLocale.codes) if (code === browserLocale.locale) result.push(code);
		}
	}
	return result;
}
function computeCurrentLocale(pathname, locales, defaultLocale) {
	for (const segment of pathname.split("/").map(normalizeThePath)) for (const locale of locales) if (typeof locale === "string") {
		if (!segment.includes(locale)) continue;
		if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) return locale;
	} else if (locale.path === segment) return locale.codes.at(0);
	else for (const code of locale.codes) if (normalizeTheLocale(code) === normalizeTheLocale(segment)) return code;
	for (const locale of locales) if (typeof locale === "string") {
		if (locale === defaultLocale) return locale;
	} else if (locale.path === defaultLocale) return locale.codes.at(0);
}
function computeCurrentLocaleFromParams(params, locales) {
	const byNormalizedCode = /* @__PURE__ */ new Map();
	const byPath = /* @__PURE__ */ new Map();
	for (const locale of locales) if (typeof locale === "string") byNormalizedCode.set(normalizeTheLocale(locale), locale);
	else {
		byPath.set(locale.path, locale.codes[0]);
		for (const code of locale.codes) byNormalizedCode.set(normalizeTheLocale(code), code);
	}
	for (const value of Object.values(params)) {
		if (!value) continue;
		const pathMatch = byPath.get(value);
		if (pathMatch) return pathMatch;
		const codeMatch = byNormalizedCode.get(normalizeTheLocale(value));
		if (codeMatch) return codeMatch;
	}
}
//#endregion
//#region node_modules/astro/dist/core/middleware/callMiddleware.js
async function callMiddleware(onRequest, apiContext, responseFunction) {
	let nextCalled = false;
	let responseFunctionPromise = void 0;
	const next = async (payload) => {
		nextCalled = true;
		responseFunctionPromise = responseFunction(apiContext, payload);
		return responseFunctionPromise;
	};
	const middlewarePromise = onRequest(apiContext, next);
	return await Promise.resolve(middlewarePromise).then(async (value) => {
		if (nextCalled) if (typeof value !== "undefined") {
			if (value instanceof Response === false) throw new AstroError(MiddlewareNotAResponse);
			return value;
		} else if (responseFunctionPromise) return responseFunctionPromise;
		else throw new AstroError(MiddlewareNotAResponse);
		else if (typeof value === "undefined") throw new AstroError(MiddlewareNoDataOrNextCalled);
		else if (value instanceof Response === false) throw new AstroError(MiddlewareNotAResponse);
		else return value;
	});
}
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/noop.js
var EMPTY_OPTIONS = Object.freeze({ tags: [] });
var NoopAstroCache = class {
	enabled = false;
	set() {}
	get tags() {
		return [];
	}
	get options() {
		return EMPTY_OPTIONS;
	}
	async invalidate() {}
};
var hasWarned = false;
var DisabledAstroCache = class {
	enabled = false;
	#logger;
	constructor(logger) {
		this.#logger = logger;
	}
	#warn() {
		if (!hasWarned) {
			hasWarned = true;
			this.#logger?.warn("cache", "`cache.set()` was called but caching is not enabled. Configure a cache provider in your Astro config under `cache` to enable caching.");
		}
	}
	set() {
		this.#warn();
	}
	get tags() {
		return [];
	}
	get options() {
		return EMPTY_OPTIONS;
	}
	async invalidate() {
		throw new AstroError(CacheNotEnabled);
	}
};
//#endregion
//#region node_modules/astro/dist/core/middleware/astro-middleware.js
var AstroMiddleware = class {
	#pipeline;
	constructor(pipeline) {
		this.#pipeline = pipeline;
	}
	async handle(state, renderRouteCallback) {
		state.pipeline.usedFeatures |= PipelineFeatures.middleware;
		const pipeline = this.#pipeline;
		await state.getProps();
		const apiContext = state.getAPIContext();
		state.counter++;
		if (state.counter === 4) return new Response("Loop Detected", {
			status: 508,
			statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
		});
		const next = async (ctx, payload) => {
			if (payload) {
				pipeline.logger.debug("router", "Called rewriting to:", payload);
				applyRewriteToState(state, payload, await pipeline.tryRewrite(payload, state.request));
			}
			return renderRouteCallback(state, ctx);
		};
		let response;
		if (state.skipMiddleware) response = await next(apiContext);
		else {
			const pipelineMiddleware = await pipeline.getMiddleware();
			response = await callMiddleware(sequence(...pipeline.internalMiddleware, pipelineMiddleware), apiContext, next);
		}
		response = this.#finalize(state, response);
		state.response = response;
		return response;
	}
	/**
	* Like `handle`, but mirrors the app-level error handling that
	* `AstroHandler` provides on the standard path, the same way
	* `PagesHandler.handleWithErrorFallback` does for `pages()`. When no
	* route matched it returns a 404 marked with `X-Astro-Error` for the
	* app's post-check; when Astro's own middleware chain throws it logs the
	* error and renders the custom `500.astro`.
	*
	* Errors surfaced through `renderRouteCallback` (the host framework's
	* `next`, e.g. host middleware mounted below `middleware()`) are
	* re-thrown instead, so the host's own error handling still runs rather
	* than being swallowed into Astro's 500 page. A sentinel tells the two
	* apart.
	*
	* Used by the composable `astro/fetch` `middleware()` entry point, where
	* there is no surrounding `AstroHandler` to supply this fallback.
	*/
	async handleWithErrorFallback(app, state, renderRouteCallback) {
		if (!state.routeData) return new Response(null, {
			status: 404,
			headers: { [ASTRO_ERROR_HEADER]: "true" }
		});
		let nextError;
		try {
			return await this.handle(state, async (s, ctx) => {
				try {
					return await renderRouteCallback(s, ctx);
				} catch (err) {
					nextError = err;
					throw err;
				}
			});
		} catch (err) {
			if (err === nextError) throw err;
			app.logger.error(null, err.stack || err.message || String(err));
			return app.renderError(state.request, {
				...state.renderOptions,
				status: 500,
				error: err,
				pathname: state.pathname
			});
		}
	}
	#finalize(state, response) {
		attachCookiesToResponse(response, state.cookies);
		return response;
	}
};
//#endregion
//#region node_modules/astro/dist/core/pages/handler.js
var EMPTY_SLOTS = Object.freeze({});
var PagesHandler = class {
	#pipeline;
	constructor(pipeline) {
		this.#pipeline = pipeline;
	}
	async handle(state, ctx) {
		const { logger, streaming } = this.#pipeline;
		state.resetResponseMetadata();
		let response;
		const componentInstance = await state.loadComponentInstance();
		switch (state.routeData.type) {
			case "endpoint":
				response = await renderEndpoint(componentInstance, ctx, state.routeData.prerender, logger, state);
				break;
			case "page": {
				const props = await state.getProps();
				const actionApiContext = state.getActionAPIContext();
				const result = await state.createResult(componentInstance, actionApiContext);
				try {
					response = await renderPage(result, componentInstance?.default, props, state.slots ?? EMPTY_SLOTS, streaming, state.routeData);
				} catch (e) {
					result.cancelled = true;
					throw e;
				}
				state.responseRouteType = "page";
				if (state.routeData.route === "/404" || state.routeData.route === "/500") state.skipErrorReroute = true;
				break;
			}
			case "redirect": return new Response(null, {
				status: 404,
				headers: { [ASTRO_ERROR_HEADER]: "true" }
			});
			case "fallback":
				state.responseRouteType = "fallback";
				return new Response(null, { status: 500 });
		}
		const responseCookies = getCookiesFromResponse(response);
		if (responseCookies) state.cookies.merge(responseCookies);
		state.response = response;
		return response;
	}
	/**
	* Like `handle`, but mirrors the app-level error handling that
	* `AstroHandler` provides on the standard path: unmatched routes
	* return a 404 marked with `X-Astro-Error` for the app's post-check
	* to render the 404 error page, and render-time errors are logged
	* and render the 500 error page instead of propagating to the host
	* framework.
	*
	* Used by the composable `astro/fetch` `pages()` entry point, where
	* there is no surrounding `AstroHandler` to supply this fallback.
	*/
	async handleWithErrorFallback(app, state) {
		if (!state.routeData) return new Response(null, {
			status: 404,
			headers: { [ASTRO_ERROR_HEADER]: "true" }
		});
		const ctx = state.getAPIContext();
		if (this.#pipeline.manifest.checkOrigin && isForbiddenCrossOriginRequest(ctx.request, ctx.url, ctx.isPrerendered)) return createCrossOriginForbiddenResponse(ctx.request);
		try {
			return await this.handle(state, ctx);
		} catch (err) {
			app.logger.error(null, err.stack || err.message || String(err));
			return app.renderError(state.request, {
				...state.renderOptions,
				status: 500,
				error: err,
				pathname: state.pathname
			});
		}
	}
};
//#endregion
//#region node_modules/astro/dist/core/util/normalized-url.js
function createNormalizedUrl(requestUrl) {
	return normalizeUrl(new URL(requestUrl));
}
function normalizeUrl(url) {
	try {
		url.pathname = validateAndDecodePathname(url.pathname);
	} catch {
		try {
			url.pathname = decodeURI(url.pathname);
		} catch {}
	}
	url.pathname = collapseDuplicateSlashes(url.pathname);
	return url;
}
//#endregion
//#region node_modules/astro/dist/core/rewrites/handler.js
function applyRewriteToState(state, payload, { routeData, componentInstance, newUrl, pathname }, { mergeCookies = false } = {}) {
	const pipeline = state.pipeline;
	const oldPathname = state.pathname;
	const isI18nFallback = routeData.fallbackRoutes && routeData.fallbackRoutes.length > 0;
	if (pipeline.manifest.serverLike && !state.routeData.prerender && routeData.prerender && !isI18nFallback) throw new AstroError({
		...ForbiddenRewrite,
		message: ForbiddenRewrite.message(state.pathname, pathname, routeData.component),
		hint: ForbiddenRewrite.hint(routeData.component)
	});
	state.routeData = routeData;
	state.componentInstance = componentInstance;
	if (payload instanceof Request) state.request = payload;
	else state.request = copyRequest(newUrl, state.request, routeData.prerender, pipeline.logger, state.routeData.route);
	state.url = createNormalizedUrl(state.request.url);
	if (mergeCookies) {
		const newCookies = new AstroCookies(state.request);
		if (state.cookies) newCookies.merge(state.cookies);
		state.cookies = newCookies;
	}
	state.params = getParams(routeData, pathname);
	state.pathname = pathname;
	state.isRewriting = true;
	state.status = 200;
	setOriginPathname(state.request, oldPathname, pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat);
	state.invalidateContexts();
}
var Rewrites = class {
	async execute(state, payload) {
		const pipeline = state.pipeline;
		pipeline.logger.debug("router", "Calling rewrite: ", payload);
		applyRewriteToState(state, payload, await pipeline.tryRewrite(payload, state.request), { mergeCookies: true });
		const middleware = new AstroMiddleware(pipeline);
		const pagesHandler = new PagesHandler(pipeline);
		return middleware.handle(state, pagesHandler.handle.bind(pagesHandler));
	}
};
//#endregion
//#region node_modules/astro/dist/core/routing/match.js
function matchRoute(pathname, manifest) {
	if (isRoute404(pathname)) {
		const errorRoute = manifest.routes.find((route) => isRoute404(route.route));
		if (errorRoute) return errorRoute;
	}
	if (isRoute500(pathname)) {
		const errorRoute = manifest.routes.find((route) => isRoute500(route.route));
		if (errorRoute) return errorRoute;
	}
	return manifest.routes.find((route) => {
		return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
	});
}
function isRoute404or500(route) {
	return isRoute404(route.route) || isRoute500(route.route);
}
function isRouteServerIsland(route) {
	return route.component === SERVER_ISLAND_COMPONENT;
}
//#endregion
//#region node_modules/astro/dist/core/i18n/domain.js
function computePathnameFromDomain(request, url, i18n, base, trailingSlash, logger) {
	let pathname = void 0;
	if (i18n && (i18n.strategy === "domains-prefix-always" || i18n.strategy === "domains-prefix-other-locales" || i18n.strategy === "domains-prefix-always-no-redirect")) {
		let host = request.headers.get("X-Forwarded-Host");
		let protocol = request.headers.get("X-Forwarded-Proto");
		if (protocol) protocol = protocol + ":";
		else protocol = url.protocol;
		if (!host) host = request.headers.get("Host");
		if (host && protocol) {
			host = host.split(":")[0];
			try {
				let locale;
				const hostAsUrl = new URL(`${protocol}//${host}`);
				for (const [domainKey, localeValue] of Object.entries(i18n.domainLookupTable)) {
					const domainKeyAsUrl = new URL(domainKey);
					if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
						locale = localeValue;
						break;
					}
				}
				if (locale) {
					pathname = prependForwardSlash(joinPaths(normalizeTheLocale(locale), removeBase(url.pathname, base)));
					if (trailingSlash === "always") pathname = appendForwardSlash(pathname);
					else if (trailingSlash === "never") pathname = removeTrailingForwardSlash(pathname);
					else if (url.pathname.endsWith("/")) pathname = appendForwardSlash(pathname);
				}
			} catch (e) {
				logger.error("router", `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`);
				logger.error("router", `Error: ${e}`);
			}
		}
	}
	return pathname;
}
function removeBase(pathname, base) {
	pathname = collapseDuplicateLeadingSlashes(pathname);
	if (pathname.startsWith(base)) return pathname.slice(removeTrailingForwardSlash(base).length + 1);
	return pathname;
}
//#endregion
//#region node_modules/astro/dist/core/app/render-options.js
var renderOptionsSymbol = /* @__PURE__ */ Symbol.for("astro.renderOptions");
function getRenderOptions(request) {
	return Reflect.get(request, renderOptionsSymbol);
}
function setRenderOptions(request, options) {
	Reflect.set(request, renderOptionsSymbol, options);
}
//#endregion
//#region node_modules/astro/dist/core/app/validate-headers.js
function getFirstForwardedValue$1(multiValueHeader) {
	return multiValueHeader?.toString().split(",").map((e) => e.trim())[0];
}
function sanitizeHost(hostname) {
	if (!hostname) return void 0;
	if (/[/\\]/.test(hostname)) return void 0;
	return hostname;
}
function parseHost(host) {
	const parts = host.split(":");
	return {
		hostname: parts[0],
		port: parts[1]
	};
}
function matchesAllowedDomains(hostname, protocol, port, allowedDomains) {
	const urlString = `${protocol}://${port ? `${hostname}:${port}` : hostname}`;
	if (!URL.canParse(urlString)) return false;
	const testUrl = new URL(urlString);
	return allowedDomains.some((pattern) => matchPattern(testUrl, pattern));
}
function validateHost(host, protocol, allowedDomains) {
	if (!host || host.length === 0) return void 0;
	if (!allowedDomains || allowedDomains.length === 0) return void 0;
	const sanitized = sanitizeHost(host);
	if (!sanitized) return void 0;
	const { hostname, port } = parseHost(sanitized);
	if (matchesAllowedDomains(hostname, protocol, port, allowedDomains)) return sanitized;
}
function validateForwardedHeaders(forwardedProtocol, forwardedHost, forwardedPort, allowedDomains) {
	const result = {};
	if (forwardedProtocol) {
		if (allowedDomains && allowedDomains.length > 0) {
			if (allowedDomains.some((pattern) => pattern.protocol !== void 0)) try {
				const testUrl = new URL(`${forwardedProtocol}://example.com`);
				if (allowedDomains.some((pattern) => matchPattern(testUrl, { protocol: pattern.protocol }))) result.protocol = forwardedProtocol;
			} catch {}
			else if (/^https?$/.test(forwardedProtocol)) result.protocol = forwardedProtocol;
		}
	}
	if (forwardedPort && allowedDomains && allowedDomains.length > 0) {
		if (allowedDomains.some((pattern) => pattern.port !== void 0)) {
			if (allowedDomains.some((pattern) => pattern.port === forwardedPort)) result.port = forwardedPort;
		}
	}
	if (forwardedHost && forwardedHost.length > 0 && allowedDomains && allowedDomains.length > 0) {
		const protoForValidation = result.protocol || "https";
		const sanitized = sanitizeHost(forwardedHost);
		if (sanitized) {
			const { hostname, port: portFromHost } = parseHost(sanitized);
			if (matchesAllowedDomains(hostname, protoForValidation, result.port || portFromHost, allowedDomains)) result.host = sanitized;
		}
	}
	return result;
}
//#endregion
//#region node_modules/astro/dist/core/fetch/fetch-state.js
var FetchState = class {
	pipeline;
	/**
	* The request to render. Mutated during rewrites so subsequent renders
	* see the rewritten URL.
	*/
	request;
	routeData;
	/**
	* The pathname to use for routing and rendering. Starts out as the raw,
	* base-stripped, decoded pathname from the request. May be further
	* normalized by `AstroHandler` after routeData is known (in dev, when
	* the matched route has no `.html` extension, `.html` / `/index.html`
	* suffixes are stripped).
	*/
	pathname;
	/** Resolved render options (addCookieHeader, clientAddress, locals, etc.). */
	renderOptions;
	/** When the request started, used to log duration. */
	timeStart;
	/**
	* The route's loaded component module. Set before middleware runs; may
	* be swapped during in-flight rewrites from inside the middleware chain.
	*/
	componentInstance;
	/**
	* Slot overrides supplied by the container API. `undefined` for HTTP
	* requests — `PagesHandler` coalesces to `{}` on read so we don't
	* allocate an empty object per request.
	*/
	slots;
	/**
	* The `Response` produced by handlers, if any. Set after page
	* rendering or middleware completes.
	*/
	response;
	/**
	* Default HTTP status for the rendered response. Callers override
	* before rendering runs (e.g. `AstroHandler` sets this from
	* `BaseApp.getDefaultStatusCode`; error handlers set `404` / `500`).
	*/
	status = 200;
	/** Whether user middleware should be skipped for this request. */
	skipMiddleware = false;
	/**
	* Set to `true` when the request path was encoded too many times to fully
	* decode (see {@link validateAndDecodePathname}). These requests are
	* rejected with a `400` before middleware or routing run.
	*/
	invalidEncoding = false;
	/** A flag that tells the render content if the rewriting was triggered. */
	isRewriting = false;
	/** A safety net in case of loops (rewrite counter). */
	counter = 0;
	/** Cookies for this request. Created lazily on first access. */
	cookies;
	/** Route params derived from routeData + pathname. Computed lazily. */
	#params;
	get params() {
		if (!this.#params && this.routeData) this.#params = getParams(this.routeData, this.pathname);
		return this.#params;
	}
	set params(value) {
		this.#params = value;
	}
	/** Normalized URL for this request. */
	url;
	/** Client address for this request. */
	clientAddress;
	/** Whether this is a partial render (container API). */
	partial;
	/** Internal metadata about the current response route type. */
	responseRouteType;
	/** Internal flag to prevent rerouting this response to an error page. */
	skipErrorReroute = false;
	/** Whether to inject CSP meta tags. */
	shouldInjectCspMetaTags;
	/** Request-scoped locals object, shared with user middleware. */
	locals = {};
	/**
	* Memoized `props` (see `getProps`). `null` means "not yet computed"
	* — using `null` (rather than `undefined`) keeps the hidden class
	* stable and distinct from a valid-but-empty result.
	*/
	props = null;
	/** Memoized `ActionAPIContext` (see `getActionAPIContext`). */
	actionApiContext = null;
	/** Memoized `APIContext` (see `getAPIContext`). */
	apiContext = null;
	/** Registered context providers keyed by name. Lazy-initialized on first provide(). */
	#providers;
	/** Cached values from resolved providers. Lazy-initialized on first resolve(). */
	#providersResolvedValues;
	/** Cached promise for lazy component instance loading. */
	#componentInstancePromise;
	/** SSR result for the current page render. */
	result;
	/** Initial props (from container/error handler). */
	initialProps = {};
	/** Rewrites handler instance. Lazy-initialized on first rewrite(). */
	#rewrites;
	/** Memoized Astro page partial. */
	#astroPagePartial;
	/**
	* Locale-prefixed pathname derived from the Host header for domain-based
	* i18n routing (e.g. `/en/boats/1/foo`), or `undefined` when the request
	* isn't served from a locale-mapped domain. When set, `this.pathname` is
	* derived from it so locale/param resolution match the route pattern.
	*/
	#domainPathname;
	/** Memoized current locale. */
	#currentLocale;
	/** Memoized preferred locale. */
	#preferredLocale;
	/** Memoized preferred locale list. */
	#preferredLocaleList;
	constructor(pipeline, request, options) {
		this.pipeline = pipeline;
		this.request = request;
		options ??= getRenderOptions(request);
		this.routeData = options?.routeData;
		this.renderOptions = options ?? {
			addCookieHeader: false,
			clientAddress: void 0,
			locals: void 0,
			prerenderedErrorPageFetch: fetch,
			routeData: void 0,
			waitUntil: void 0
		};
		this.componentInstance = void 0;
		this.slots = void 0;
		const url = new URL(request.url);
		const domainPathname = computePathnameFromDomain(request, url, pipeline.manifest.i18n, pipeline.manifest.base, pipeline.manifest.trailingSlash, pipeline.logger);
		if (domainPathname) {
			this.#domainPathname = domainPathname;
			try {
				this.pathname = decodeURI(domainPathname);
			} catch {
				this.pathname = domainPathname;
			}
		} else this.pathname = this.#computePathname(url);
		this.timeStart = performance.now();
		this.clientAddress = options?.clientAddress;
		this.locals = options?.locals ?? {};
		this.url = normalizeUrl(url);
		this.cookies = new AstroCookies(request);
		if (pipeline.manifest.allowedDomains && pipeline.manifest.allowedDomains.length > 0 && !this.routeData?.prerender) this.#applyForwardedHeaders();
		if (!Reflect.get(this.request, originPathnameSymbol)) setOriginPathname(this.request, this.pathname, pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat);
		this.#resolveRouteData();
	}
	/**
	* Triggers a rewrite. Delegates to the Rewrites handler.
	*/
	rewrite(payload) {
		return (this.#rewrites ??= new Rewrites()).execute(this, payload);
	}
	/**
	* Creates the SSR result for the current page render.
	*/
	async createResult(mod, ctx) {
		const pipeline = this.pipeline;
		const { clientDirectives, inlinedScripts, compressHTML, manifest, renderers, resolve } = pipeline;
		const routeData = this.routeData;
		const { links, scripts, styles } = await pipeline.headElements(routeData);
		const extraStyleHashes = [];
		const extraScriptHashes = [];
		const shouldInjectCspMetaTags = this.shouldInjectCspMetaTags ?? manifest.shouldInjectCspMetaTags;
		const cspAlgorithm = manifest.csp?.algorithm ?? "SHA-256";
		if (shouldInjectCspMetaTags) {
			for (const style of styles) extraStyleHashes.push(await generateCspDigest(style.children, cspAlgorithm));
			for (const script of scripts) extraScriptHashes.push(await generateCspDigest(script.children, cspAlgorithm));
		}
		const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest.componentMetadata;
		const headers = new Headers({ "Content-Type": "text/html" });
		const partial = typeof this.partial === "boolean" ? this.partial : Boolean(mod.partial);
		const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
		const status = this.status;
		const response = {
			status: actionResult?.error ? actionResult?.error.status : status,
			statusText: actionResult?.error ? actionResult?.error.type : "OK",
			get headers() {
				return headers;
			},
			set headers(_) {
				throw new AstroError(AstroResponseHeadersReassigned);
			}
		};
		const state = this;
		const result = {
			base: manifest.base,
			userAssetsBase: manifest.userAssetsBase,
			cancelled: false,
			clientDirectives,
			inlinedScripts,
			componentMetadata,
			compressHTML,
			cookies: this.cookies,
			createAstro: (props, slots) => state.createAstro(result, props, slots, ctx),
			links,
			params: this.params,
			partial,
			pathname: this.pathname,
			renderers,
			resolve,
			response,
			request: this.request,
			scripts,
			styles,
			actionResult,
			async getServerIslandNameMap() {
				return (await pipeline.getServerIslands()).serverIslandNameMap ?? /* @__PURE__ */ new Map();
			},
			key: manifest.key,
			trailingSlash: manifest.trailingSlash,
			_metadata: {
				hasHydrationScript: false,
				rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
				hasRenderedHead: false,
				renderedScripts: /* @__PURE__ */ new Set(),
				hasDirectives: /* @__PURE__ */ new Set(),
				hasRenderedServerIslandRuntime: false,
				headInTree: false,
				extraHead: [],
				extraStyleHashes,
				extraScriptHashes,
				propagators: /* @__PURE__ */ new Set(),
				routeHasPropagation: false,
				pendingSlotEvaluations: [],
				templateDepth: 0
			},
			cspDestination: manifest.csp?.cspDestination ?? (routeData.prerender ? "meta" : "header"),
			shouldInjectCspMetaTags,
			cspAlgorithm,
			scriptHashes: manifest.csp?.scriptHashes ? [...manifest.csp.scriptHashes] : [],
			scriptResources: manifest.csp?.scriptResources ? [...manifest.csp.scriptResources] : [],
			styleHashes: manifest.csp?.styleHashes ? [...manifest.csp.styleHashes] : [],
			styleResources: manifest.csp?.styleResources ? [...manifest.csp.styleResources] : [],
			directives: manifest.csp?.directives ? [...manifest.csp.directives] : [],
			isStrictDynamic: manifest.csp?.isStrictDynamic ?? false,
			internalFetchHeaders: manifest.internalFetchHeaders
		};
		this.result = result;
		return result;
	}
	/**
	* Creates the Astro global object for a component render.
	*/
	createAstro(result, props, slotValues, apiContext) {
		let astroPagePartial;
		if (this.isRewriting) this.#astroPagePartial = this.createAstroPagePartial(result, apiContext);
		this.#astroPagePartial ??= this.createAstroPagePartial(result, apiContext);
		astroPagePartial = this.#astroPagePartial;
		const astroComponentPartial = {
			props,
			self: null
		};
		const Astro = Object.assign(Object.create(astroPagePartial), astroComponentPartial);
		let _slots;
		Object.defineProperty(Astro, "slots", { get: () => {
			if (!_slots) _slots = new Slots(result, slotValues, this.pipeline.logger);
			return _slots;
		} });
		return Astro;
	}
	/**
	* Creates the Astro page-level partial (prototype for Astro global).
	*/
	createAstroPagePartial(result, apiContext) {
		const state = this;
		const { cookies, locals, params, pipeline, url } = this;
		const { response } = result;
		const redirect = (path, status = 302) => {
			if (state.request[responseSentSymbol$1]) throw new AstroError({ ...ResponseSentError });
			return new Response(null, {
				status,
				headers: { Location: path }
			});
		};
		const rewrite = async (reroutePayload) => {
			return await state.rewrite(reroutePayload);
		};
		const callAction = createCallAction(apiContext);
		const partial = {
			generator: ASTRO_GENERATOR,
			routePattern: this.routeData.route,
			isPrerendered: this.routeData.prerender,
			cookies,
			get clientAddress() {
				return state.getClientAddress();
			},
			get currentLocale() {
				return state.computeCurrentLocale();
			},
			params,
			get preferredLocale() {
				return state.computePreferredLocale();
			},
			get preferredLocaleList() {
				return state.computePreferredLocaleList();
			},
			locals,
			redirect,
			rewrite,
			request: this.request,
			response,
			site: pipeline.site,
			getActionResult: createGetActionResult(locals),
			get callAction() {
				return callAction;
			},
			url,
			get originPathname() {
				return getOriginPathname(state.request);
			},
			get csp() {
				return state.getCsp();
			},
			get logger() {
				return {
					info(msg) {
						pipeline.logger.info(null, msg);
					},
					warn(msg) {
						pipeline.logger.warn(null, msg);
					},
					error(msg) {
						pipeline.logger.error(null, msg);
					}
				};
			}
		};
		this.defineProviderGetters(partial);
		return partial;
	}
	getClientAddress() {
		const { pipeline, clientAddress } = this;
		const routeData = this.routeData;
		if (routeData.prerender) throw new AstroError({
			...PrerenderClientAddressNotAvailable,
			message: PrerenderClientAddressNotAvailable.message(routeData.component)
		});
		if (clientAddress) return clientAddress;
		if (pipeline.adapterName) throw new AstroError({
			...ClientAddressNotAvailable,
			message: ClientAddressNotAvailable.message(pipeline.adapterName)
		});
		throw new AstroError(StaticClientAddressNotAvailable);
	}
	getCookies() {
		return this.cookies;
	}
	getCsp() {
		const state = this;
		const { pipeline } = this;
		if (!pipeline.manifest.csp) {
			if (pipeline.runtimeMode === "production") pipeline.logger.warn("csp", `context.csp was used when rendering the route ${colors.green(state.routeData.route)}, but CSP was not configured. For more information, see https://docs.astro.build/en/reference/configuration-reference/#securitycsp`);
			return;
		}
		return {
			insertDirective(payload) {
				if (state.result) state.result.directives = pushDirective(state.result.directives, payload);
			},
			insertScriptResource(resource) {
				state.result?.scriptResources.push(resource);
			},
			insertStyleResource(resource) {
				state.result?.styleResources.push(resource);
			},
			insertStyleHash(hash) {
				state.result?.styleHashes.push(hash);
			},
			insertScriptHash(hash) {
				state.result?.scriptHashes.push(hash);
			}
		};
	}
	computeCurrentLocale() {
		const { url, pipeline: { i18n }, routeData } = this;
		if (!i18n || !routeData) return;
		const { defaultLocale, locales, strategy } = i18n;
		const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
		if (this.#currentLocale) return this.#currentLocale;
		let computedLocale;
		if (isRouteServerIsland(routeData)) {
			let referer = this.request.headers.get("referer");
			if (referer) {
				if (URL.canParse(referer)) referer = new URL(referer).pathname;
				computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
			}
		} else {
			let pathname = routeData.pathname;
			if (this.#domainPathname) pathname = this.pathname;
			else if (url && !routeData.pattern.test(url.pathname)) {
				for (const fallbackRoute of routeData.fallbackRoutes) if (fallbackRoute.pattern.test(url.pathname)) {
					pathname = fallbackRoute.pathname;
					break;
				}
			}
			pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname ?? this.pathname;
			computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
			if (routeData.params.length > 0) {
				const localeFromParams = computeCurrentLocaleFromParams(this.params, locales);
				if (localeFromParams) computedLocale = localeFromParams;
			}
		}
		this.#currentLocale = computedLocale ?? fallbackTo;
		return this.#currentLocale;
	}
	computePreferredLocale() {
		const { pipeline: { i18n }, request } = this;
		if (!i18n) return;
		return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
	}
	computePreferredLocaleList() {
		const { pipeline: { i18n }, request } = this;
		if (!i18n) return;
		return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
	}
	/**
	* Lazily loads the route's component module. Returns the cached
	* instance if already loaded. The promise is cached so concurrent
	* callers share the same load.
	*/
	async loadComponentInstance() {
		if (this.componentInstance) return this.componentInstance;
		if (this.#componentInstancePromise) return this.#componentInstancePromise;
		this.#componentInstancePromise = this.pipeline.getComponentByRoute(this.routeData).then((mod) => {
			this.componentInstance = mod;
			return mod;
		});
		return this.#componentInstancePromise;
	}
	/**
	* Registers a context provider under the given key. Handlers call
	* this to contribute values to the request context (e.g. sessions).
	* The `create` factory is called lazily on the first `resolve(key)`.
	*/
	provide(key, provider) {
		(this.#providers ??= /* @__PURE__ */ new Map()).set(key, provider);
	}
	/**
	* Lazily resolves a provider registered under `key`. Calls
	* `provider.create()` on first access and caches the result.
	* Returns `undefined` if no provider was registered for the key.
	*/
	resolve(key) {
		if (this.#providersResolvedValues?.has(key)) return this.#providersResolvedValues.get(key);
		const provider = this.#providers?.get(key);
		if (!provider) return void 0;
		const value = provider.create();
		(this.#providersResolvedValues ??= /* @__PURE__ */ new Map()).set(key, value);
		return value;
	}
	/**
	* Runs all registered `finalize` callbacks. Should be called after
	* the response is produced, typically in a `finally` block.
	*
	* Returns synchronously (no promise allocation) when nothing needs
	* finalizing — important for the hot path where sessions are not used.
	*/
	finalizeAll() {
		if (!this.#providersResolvedValues || this.#providersResolvedValues.size === 0) return;
		let chain;
		for (const [key, provider] of this.#providers) if (provider.finalize && this.#providersResolvedValues.has(key)) {
			const result = provider.finalize(this.#providersResolvedValues.get(key));
			if (result) chain = chain ? chain.then(() => result) : result;
		}
		return chain;
	}
	/**
	* Adds lazy getters to `target` for each registered provider key.
	* Used by context creation (APIContext, Astro global) so that
	* provider values like `session` and `cache` appear as properties
	* without hard-coding the keys.
	*
	* Always defines a `session` getter (returning `undefined` when no
	* provider is registered) so `ctx.session` / `Astro.session` is a
	* present property regardless of whether the sessions handler was
	* included in the pipeline.
	*/
	defineProviderGetters(target) {
		const state = this;
		if (this.#providers) for (const key of this.#providers.keys()) Object.defineProperty(target, key, {
			get: () => state.resolve(key),
			enumerable: true,
			configurable: true
		});
		if (!this.#providers?.has("session")) {
			let warned = false;
			Object.defineProperty(target, "session", {
				get() {
					if (!warned) {
						warned = true;
						state.pipeline.logger.warn("session", "`Astro.session` was accessed but no session storage is configured. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/");
					}
				},
				enumerable: true,
				configurable: true
			});
		}
	}
	/**
	* Resolves the route to use for this request and stores it on
	* `this.routeData`. If the adapter (or the dev server) provided a
	* `routeData` via render options it's already set and this is a
	* no-op. Otherwise we use the app's synchronous route matcher and
	* fall back to a `404.astro` route so middleware can still run.
	*
	* Called eagerly from the constructor so individual handlers
	* (actions, pages, middleware, etc.) always see a resolved route
	* without the caller needing an extra setup step.
	*
	* Once routeData is known, finalizes `this.pathname`: in dev, if the
	* matched route has no `.html` extension, strip `.html` / `/index.html`
	* suffixes so the rendering pipeline sees the canonical pathname.
	*/
	/**
	* Strip `.html` / `/index.html` suffixes from the pathname so the
	* rendering pipeline sees the canonical route path. Only applies to
	* page routes where `.html` is framework-injected. Endpoint routes
	* preserve `.html` because any such suffix is user-provided (e.g.
	* from `getStaticPaths` params). Skipped when the matched route
	* itself has an `.html` extension in its definition.
	*/
	#stripHtmlExtension() {
		if (this.routeData && this.routeData.type === "page" && !routeHasHtmlExtension(this.routeData)) this.pathname = this.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
	}
	#resolveRouteData() {
		const pipeline = this.pipeline;
		if (this.routeData) {
			this.#stripHtmlExtension();
			return;
		}
		const matched = pipeline.matchRoute(this.pathname);
		if (matched && matched.prerender && pipeline.manifest.serverLike) if (matched.params.length > 0) {
			const allMatches = pipeline.matchAllRoutes(this.pathname);
			this.routeData = allMatches.find((r) => !r.prerender);
		} else this.routeData = void 0;
		else this.routeData = matched;
		pipeline.logger.debug("router", "Astro matched the following route for " + this.request.url);
		pipeline.logger.debug("router", "RouteData:\n" + this.routeData);
		if (!this.routeData) {
			const custom404 = getCustom404Route(pipeline.manifestData);
			if (custom404 && !custom404.prerender) this.routeData = custom404;
		}
		if (!this.routeData) {
			pipeline.logger.debug("router", "Astro hasn't found routes that match " + this.request.url);
			pipeline.logger.debug("router", "Here's the available routes:\n", pipeline.manifestData);
			return;
		}
		this.#stripHtmlExtension();
	}
	/**
	* Strips the pipeline's base from the request URL, prepends a forward
	* slash, and decodes the pathname. Falls back to the raw (not decoded)
	* pathname if `decodeURI` throws.
	*
	* Mirrors `BaseApp.removeBase`, including the
	* `collapseDuplicateLeadingSlashes` fix that prevents middleware
	* authorization bypass when the URL starts with `//`.
	*/
	#computePathname(url) {
		let pathname = collapseDuplicateLeadingSlashes(url.pathname);
		const base = this.pipeline.manifest.base;
		if (pathname.startsWith(base)) {
			const baseWithoutTrailingSlash = removeTrailingForwardSlash(base);
			pathname = pathname.slice(baseWithoutTrailingSlash.length + 1);
		}
		pathname = prependForwardSlash(pathname);
		try {
			return validateAndDecodePathname(pathname);
		} catch (e) {
			if (e instanceof MultiLevelEncodingError) {
				this.invalidEncoding = true;
				return pathname;
			}
			this.pipeline.logger.error(null, e.toString());
			return pathname;
		}
	}
	/**
	* Reads X-Forwarded-Proto, X-Forwarded-Host, and X-Forwarded-Port
	* from the request headers, validates them against the manifest's
	* `allowedDomains`, and updates `this.url` accordingly. Also resolves
	* `clientAddress` from X-Forwarded-For when the host is trusted.
	*
	* Only called when `allowedDomains` is configured — without it,
	* forwarded headers are never trusted.
	*/
	#applyForwardedHeaders() {
		const headers = this.request.headers;
		const allowedDomains = this.pipeline.manifest.allowedDomains;
		const validated = validateForwardedHeaders(getFirstForwardedValue$1(headers.get("x-forwarded-proto") ?? void 0), getFirstForwardedValue$1(headers.get("x-forwarded-host") ?? void 0), getFirstForwardedValue$1(headers.get("x-forwarded-port") ?? void 0), allowedDomains);
		if (!validated.protocol && !validated.host && !validated.port) return;
		if (validated.protocol) this.url.protocol = validated.protocol + ":";
		if (validated.host) {
			const colonIdx = validated.host.indexOf(":");
			if (colonIdx !== -1) {
				this.url.hostname = validated.host.slice(0, colonIdx);
				this.url.port = validated.host.slice(colonIdx + 1);
			} else {
				this.url.hostname = validated.host;
				this.url.port = "";
			}
		}
		if (validated.port) this.url.port = validated.port;
		if (validated.host !== void 0 && !this.clientAddress) {
			const forwardedFor = getFirstForwardedValue$1(this.request.headers.get("x-forwarded-for") ?? void 0);
			if (forwardedFor) this.clientAddress = forwardedFor;
		}
		const oldRequest = this.request;
		this.request = new Request(this.url, oldRequest);
		const app = Reflect.get(oldRequest, appSymbol);
		if (app !== void 0) Reflect.set(this.request, appSymbol, app);
	}
	/**
	* Returns the resolved `props` for this render, computing them lazily
	* from the route + component module on first access. If the
	* `initialProps` already carries user-supplied props (e.g. the
	* container API) those are used verbatim.
	*/
	async getProps() {
		if (this.props !== null) return this.props;
		if (Object.keys(this.initialProps).length > 0) {
			this.props = this.initialProps;
			return this.props;
		}
		const pipeline = this.pipeline;
		const mod = await this.loadComponentInstance();
		this.props = await getProps({
			mod,
			routeData: this.routeData,
			routeCache: pipeline.routeCache,
			pathname: this.pathname,
			logger: pipeline.logger,
			serverLike: pipeline.manifest.serverLike,
			base: pipeline.manifest.base,
			trailingSlash: pipeline.manifest.trailingSlash
		});
		return this.props;
	}
	/**
	* Returns the `ActionAPIContext` for this render, creating it lazily.
	* Used by middleware, actions, and page dispatch.
	*/
	getActionAPIContext() {
		if (this.actionApiContext !== null) return this.actionApiContext;
		const state = this;
		const ctx = {
			get cookies() {
				return state.cookies;
			},
			routePattern: this.routeData.route,
			isPrerendered: this.routeData.prerender,
			get clientAddress() {
				return state.getClientAddress();
			},
			get currentLocale() {
				return state.computeCurrentLocale();
			},
			generator: ASTRO_GENERATOR,
			get locals() {
				return state.locals;
			},
			set locals(_) {
				throw new AstroError(LocalsReassigned);
			},
			params: this.params,
			get preferredLocale() {
				return state.computePreferredLocale();
			},
			get preferredLocaleList() {
				return state.computePreferredLocaleList();
			},
			request: this.request,
			site: this.pipeline.site,
			url: this.url,
			get originPathname() {
				return getOriginPathname(state.request);
			},
			get csp() {
				return state.getCsp();
			},
			get logger() {
				return {
					info(msg) {
						state.pipeline.logger.info(null, msg);
					},
					warn(msg) {
						state.pipeline.logger.warn(null, msg);
					},
					error(msg) {
						state.pipeline.logger.error(null, msg);
					}
				};
			}
		};
		this.defineProviderGetters(ctx);
		this.actionApiContext = ctx;
		return this.actionApiContext;
	}
	/**
	* Returns the `APIContext` for this render, creating it lazily from
	* the memoized props + action context.
	*
	* Callers must ensure `getProps()` has resolved at least once before
	* calling this.
	*/
	getAPIContext() {
		if (this.apiContext !== null) return this.apiContext;
		const actionApiContext = this.getActionAPIContext();
		const state = this;
		const redirect = (path, status = 302) => new Response(null, {
			status,
			headers: { Location: path }
		});
		const rewrite = async (reroutePayload) => {
			return await state.rewrite(reroutePayload);
		};
		Reflect.set(actionApiContext, pipelineSymbol, this.pipeline);
		actionApiContext[fetchStateSymbol] = this;
		this.apiContext = Object.assign(actionApiContext, {
			props: this.props,
			redirect,
			rewrite,
			getActionResult: createGetActionResult(actionApiContext.locals),
			callAction: createCallAction(actionApiContext)
		});
		return this.apiContext;
	}
	/**
	* Invalidates the cached `APIContext` so the next `getAPIContext()`
	* call re-derives it from the (possibly mutated) state. Used
	* after an in-flight rewrite swaps the route / request / params.
	*/
	invalidateContexts() {
		this.props = null;
		this.actionApiContext = null;
		this.apiContext = null;
	}
	resetResponseMetadata() {
		this.responseRouteType = void 0;
		this.skipErrorReroute = false;
	}
};
//#endregion
//#region node_modules/astro/dist/actions/handler.js
var ActionHandler = class {
	/**
	* Run action handling for the current request. Expects the APIContext
	* that is already being used by the render pipeline.
	*
	* Returns a `Response` when the action fully handles the request (RPC),
	* or `undefined` when the caller should continue processing the
	* request (form actions or non-action requests).
	*/
	handle(apiContext, state) {
		state.pipeline.usedFeatures |= PipelineFeatures.actions;
		if (apiContext.isPrerendered) return;
		const { action, setActionResult } = getActionContext(apiContext);
		if (!action) return;
		if (state.pipeline.manifest.checkOrigin && isForbiddenCrossOriginRequest(apiContext.request, apiContext.url, apiContext.isPrerendered)) return Promise.resolve(createCrossOriginForbiddenResponse(apiContext.request));
		return this.#executeAction(action, setActionResult);
	}
	async #executeAction(action, setActionResult) {
		const serialized = serializeActionResult(await action.handler());
		if (action.calledFrom === "rpc") {
			if (serialized.type === "empty") return new Response(null, { status: serialized.status });
			return new Response(serialized.body, {
				status: serialized.status,
				headers: { "Content-Type": serialized.contentType }
			});
		}
		setActionResult(action.name, serialized);
	}
};
//#endregion
//#region node_modules/astro/dist/core/app/prepare-response.js
function prepareResponse(response, { addCookieHeader }) {
	if (addCookieHeader) for (const setCookieHeaderValue of getSetCookiesFromResponse(response)) response.headers.append("set-cookie", setCookieHeaderValue);
	Reflect.set(response, responseSentSymbol$1, true);
}
//#endregion
//#region node_modules/astro/dist/core/routing/3xx.js
function redirectTemplate({ status, absoluteLocation, relativeLocation, from }) {
	const delay = status === 302 ? 2 : 0;
	const rel = escape(String(relativeLocation));
	return `<!doctype html>
<title>Redirecting to: ${rel}</title>
<meta http-equiv="refresh" content="${delay};url=${rel}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(String(absoluteLocation))}">
<body>
	<a href="${rel}">Redirecting ${from ? `from <code>${escape(from)}</code> ` : ""}to <code>${rel}</code></a>
</body>`;
}
//#endregion
//#region node_modules/astro/dist/core/routing/trailing-slash-handler.js
var TrailingSlashHandler = class {
	#app;
	constructor(app) {
		this.#app = app;
	}
	/**
	* Returns a redirect `Response` if the request pathname needs
	* normalization, or `undefined` if no redirect is required.
	*/
	handle(state) {
		const url = new URL(state.request.url);
		const redirect = this.#redirectTrailingSlash(url.pathname);
		if (redirect === url.pathname) return;
		const addCookieHeader = state.renderOptions.addCookieHeader;
		const status = state.request.method === "GET" ? 301 : 308;
		const response = new Response(redirectTemplate({
			status,
			relativeLocation: url.pathname,
			absoluteLocation: redirect,
			from: state.request.url
		}), {
			status,
			headers: { location: redirect + url.search }
		});
		prepareResponse(response, { addCookieHeader });
		return response;
	}
	#redirectTrailingSlash(pathname) {
		const { trailingSlash } = this.#app.manifest;
		if (pathname === "/" || isInternalPath(pathname)) return pathname;
		const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
		if (path !== pathname) return path;
		if (trailingSlash === "ignore") return pathname;
		if (trailingSlash === "always" && !hasFileExtension(pathname)) return appendForwardSlash(pathname);
		if (trailingSlash === "never") return removeTrailingForwardSlash(pathname);
		return pathname;
	}
};
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/utils.js
function defaultSetHeaders(options) {
	const headers = new Headers();
	const directives = [];
	if (options.maxAge !== void 0) directives.push(`max-age=${options.maxAge}`);
	if (options.swr !== void 0) directives.push(`stale-while-revalidate=${options.swr}`);
	if (directives.length > 0) headers.set("CDN-Cache-Control", directives.join(", "));
	if (options.tags && options.tags.length > 0) headers.set("Cache-Tag", options.tags.join(", "));
	if (options.lastModified) headers.set("Last-Modified", options.lastModified.toUTCString());
	if (options.etag) headers.set("ETag", options.etag);
	return headers;
}
function isLiveDataEntry(value) {
	return value != null && typeof value === "object" && "id" in value && "data" in value && "cacheHint" in value;
}
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/cache.js
var APPLY_HEADERS = /* @__PURE__ */ Symbol.for("astro:cache:apply");
var IS_ACTIVE = /* @__PURE__ */ Symbol.for("astro:cache:active");
var AstroCache = class {
	#options = {};
	#tags = /* @__PURE__ */ new Set();
	#disabled = false;
	#provider;
	enabled = true;
	constructor(provider) {
		this.#provider = provider;
	}
	set(input) {
		if (input === false) {
			this.#disabled = true;
			this.#tags.clear();
			this.#options = {};
			return;
		}
		this.#disabled = false;
		let options;
		if (isLiveDataEntry(input)) {
			if (!input.cacheHint) return;
			options = input.cacheHint;
		} else options = input;
		if ("maxAge" in options && options.maxAge !== void 0) this.#options.maxAge = options.maxAge;
		if ("swr" in options && options.swr !== void 0) this.#options.swr = options.swr;
		if ("etag" in options && options.etag !== void 0) this.#options.etag = options.etag;
		if (options.lastModified !== void 0) {
			if (!this.#options.lastModified || options.lastModified > this.#options.lastModified) this.#options.lastModified = options.lastModified;
		}
		if (options.tags) for (const tag of options.tags) this.#tags.add(tag);
	}
	get tags() {
		return [...this.#tags];
	}
	/**
	* Get the current cache options (read-only snapshot).
	* Includes all accumulated options: maxAge, swr, tags, etag, lastModified.
	*/
	get options() {
		return {
			...this.#options,
			tags: this.tags
		};
	}
	async invalidate(input) {
		if (!this.#provider) throw new AstroError(CacheNotEnabled);
		let options;
		if (isLiveDataEntry(input)) options = { tags: input.cacheHint?.tags ?? [] };
		else options = input;
		return this.#provider.invalidate(options);
	}
	/** @internal */
	[APPLY_HEADERS](response, request) {
		if (this.#disabled) return;
		const finalOptions = {
			...this.#options,
			tags: this.tags
		};
		if (finalOptions.maxAge === void 0 && !finalOptions.tags?.length) return;
		const headers = this.#provider?.setHeaders?.(finalOptions, request) ?? defaultSetHeaders(finalOptions);
		for (const [key, value] of headers) response.headers.set(key, value);
	}
	/** @internal */
	get [IS_ACTIVE]() {
		return !this.#disabled && (this.#options.maxAge !== void 0 || this.#tags.size > 0);
	}
};
function applyCacheHeaders(cache, response, request) {
	if (APPLY_HEADERS in cache) cache[APPLY_HEADERS](response, request);
}
//#endregion
//#region node_modules/astro/dist/core/routing/parts.js
var ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
var ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
	const result = [];
	part.split(ROUTE_DYNAMIC_SPLIT).map((str, i) => {
		if (!str) return;
		const dynamic = i % 2 === 1;
		const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
		if (!content || dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content)) throw new Error(`Invalid route ${file} \u2014 parameter name must match /^[a-zA-Z0-9_$]+$/`);
		result.push({
			content,
			dynamic,
			spread: dynamic && ROUTE_SPREAD.test(content)
		});
	});
	return result;
}
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/route-matching.js
function compileCacheRoutes(routes, base, trailingSlash) {
	const compiled = Object.entries(routes).map(([path, options]) => {
		const segments = removeLeadingForwardSlash(path).split("/").filter(Boolean).map((s) => getParts(s, path));
		return {
			pattern: getPattern(segments, base, trailingSlash),
			options,
			segments,
			route: path
		};
	});
	compiled.sort((a, b) => routeComparator({
		segments: a.segments,
		route: a.route,
		type: "page"
	}, {
		segments: b.segments,
		route: b.route,
		type: "page"
	}));
	return compiled;
}
function matchCacheRoute(pathname, compiledRoutes) {
	for (const route of compiledRoutes) if (route.pattern.test(pathname)) return route.options;
	return null;
}
//#endregion
//#region node_modules/astro/dist/core/cache/handler.js
var CACHE_KEY = "cache";
function provideCache(state) {
	const pipeline = state.pipeline;
	if (!pipeline.cacheConfig) {
		state.provide(CACHE_KEY, { create: () => new DisabledAstroCache(pipeline.logger) });
		return;
	}
	if (pipeline.runtimeMode === "development") {
		state.provide(CACHE_KEY, { create: () => new NoopAstroCache() });
		return;
	}
	return provideCacheAsync(state, pipeline);
}
async function provideCacheAsync(state, pipeline) {
	const cacheProvider = await pipeline.getCacheProvider();
	state.provide(CACHE_KEY, { create() {
		const cache = new AstroCache(cacheProvider);
		if (pipeline.cacheConfig?.routes) {
			if (!pipeline.compiledCacheRoutes) pipeline.compiledCacheRoutes = compileCacheRoutes(pipeline.cacheConfig.routes, pipeline.manifest.base, pipeline.manifest.trailingSlash);
			const matched = matchCacheRoute(state.pathname, pipeline.compiledCacheRoutes);
			if (matched) cache.set(matched);
		}
		return cache;
	} });
}
var CacheHandler = class {
	#app;
	constructor(app) {
		this.#app = app;
	}
	async handle(state, next) {
		this.#app.pipeline.usedFeatures |= PipelineFeatures.cache;
		if (!this.#app.pipeline.cacheProvider) return next();
		const cache = state.resolve(CACHE_KEY);
		const cacheProvider = await this.#app.pipeline.getCacheProvider();
		if (cacheProvider?.onRequest) {
			const response2 = await cacheProvider.onRequest({
				request: state.request,
				url: new URL(state.request.url),
				waitUntil: state.renderOptions.waitUntil
			}, async () => {
				const res = await next();
				applyCacheHeaders(cache, res, state.request);
				return res;
			});
			response2.headers.delete("CDN-Cache-Control");
			response2.headers.delete("Cache-Tag");
			return response2;
		}
		const response = await next();
		applyCacheHeaders(cache, response, state.request);
		return response;
	}
};
//#endregion
//#region node_modules/astro/dist/core/redirects/render.js
function isExternalURL(url) {
	return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
function redirectIsExternal(redirect) {
	if (typeof redirect === "string") return isExternalURL(redirect);
	else return isExternalURL(redirect.destination);
}
function computeRedirectStatus(method, redirect, redirectRoute) {
	return redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
}
function resolveRedirectTarget(params, redirect, redirectRoute, trailingSlash) {
	if (typeof redirectRoute !== "undefined") return getRouteGenerator(redirectRoute.segments, trailingSlash)(params) || redirectRoute?.pathname || "/";
	else if (typeof redirect === "string") if (redirectIsExternal(redirect)) return redirect;
	else {
		let target = redirect;
		for (const param of Object.keys(params)) {
			const paramValue = params[param];
			target = target.replace(`[${param}]`, paramValue).replace(`[...${param}]`, paramValue);
		}
		return target;
	}
	else if (typeof redirect === "undefined") return "/";
	return redirect.destination;
}
async function renderRedirect(state) {
	state.pipeline.usedFeatures |= PipelineFeatures.redirects;
	const { redirect, redirectRoute } = state.routeData;
	const status = computeRedirectStatus(state.request.method, redirect, redirectRoute);
	const headers = { location: encodeURI(resolveRedirectTarget(state.params, redirect, redirectRoute, state.pipeline.manifest.trailingSlash)) };
	if (redirect && redirectIsExternal(redirect)) if (typeof redirect === "string") return Response.redirect(redirect, status);
	else return Response.redirect(redirect.destination, status);
	return new Response(null, {
		status,
		headers
	});
}
//#endregion
//#region node_modules/astro/dist/core/session/runtime.js
var PERSIST_SYMBOL = /* @__PURE__ */ Symbol();
var DEFAULT_COOKIE_NAME = "astro-session";
var VALID_COOKIE_REGEX = /^[\w-]+$/;
var unflatten$1 = (parsed, _) => {
	return unflatten(parsed, { URL: (href) => new URL(href) });
};
var stringify$1 = (data, _) => {
	return stringify(data, { URL: (val) => val instanceof URL && val.href });
};
var AstroSession = class AstroSession {
	#cookies;
	#config;
	#cookieConfig;
	#cookieName;
	#storage;
	#data;
	#sessionID;
	#toDestroy = /* @__PURE__ */ new Set();
	#toDelete = /* @__PURE__ */ new Set();
	#dirty = false;
	#cookieSet = false;
	#sessionIDFromCookie = false;
	#partial = true;
	#driverFactory;
	static #sharedStorage = /* @__PURE__ */ new Map();
	constructor({ cookies, config, runtimeMode, driverFactory, mockStorage }) {
		if (!config) throw new AstroError({
			...SessionStorageInitError,
			message: SessionStorageInitError.message("No driver was defined in the session configuration and the adapter did not provide a default driver.")
		});
		this.#cookies = cookies;
		this.#driverFactory = driverFactory;
		const { cookie: cookieConfig = DEFAULT_COOKIE_NAME, ...configRest } = config;
		let cookieConfigObject;
		if (typeof cookieConfig === "object") {
			const { name = DEFAULT_COOKIE_NAME, ...rest } = cookieConfig;
			this.#cookieName = name;
			cookieConfigObject = rest;
		} else this.#cookieName = cookieConfig || DEFAULT_COOKIE_NAME;
		this.#cookieConfig = {
			sameSite: "lax",
			secure: runtimeMode === "production",
			path: "/",
			...cookieConfigObject,
			httpOnly: true
		};
		this.#config = configRest;
		if (mockStorage) this.#storage = mockStorage;
	}
	/**
	* Gets a session value. Returns `undefined` if the session or value does not exist.
	*/
	async get(key) {
		return (await this.#ensureData()).get(key)?.data;
	}
	/**
	* Checks if a session value exists.
	*/
	async has(key) {
		return (await this.#ensureData()).has(key);
	}
	/**
	* Gets all session values.
	*/
	async keys() {
		return (await this.#ensureData()).keys();
	}
	/**
	* Gets all session values.
	*/
	async values() {
		return [...(await this.#ensureData()).values()].map((entry) => entry.data);
	}
	/**
	* Gets all session entries.
	*/
	async entries() {
		return [...(await this.#ensureData()).entries()].map(([key, entry]) => [key, entry.data]);
	}
	/**
	* Deletes a session value.
	*/
	delete(key) {
		this.#data ??= /* @__PURE__ */ new Map();
		this.#data.delete(key);
		if (this.#partial) this.#toDelete.add(key);
		this.#dirty = true;
	}
	/**
	* Sets a session value. The session is created if it does not exist.
	*/
	set(key, value, { ttl } = {}) {
		if (!key) throw new AstroError({
			...SessionStorageSaveError,
			message: "The session key was not provided."
		});
		let cloned;
		try {
			cloned = unflatten$1(JSON.parse(stringify$1(value)));
		} catch (err) {
			throw new AstroError({
				...SessionStorageSaveError,
				message: `The session data for ${key} could not be serialized.`,
				hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
			}, { cause: err });
		}
		if (!this.#cookieSet) {
			this.#setCookie();
			this.#cookieSet = true;
		}
		this.#data ??= /* @__PURE__ */ new Map();
		const lifetime = ttl ?? this.#config.ttl;
		const expires = typeof lifetime === "number" ? Date.now() + lifetime * 1e3 : lifetime;
		this.#data.set(key, {
			data: cloned,
			expires
		});
		this.#dirty = true;
	}
	/**
	* Destroys the session, clearing the cookie and storage if it exists.
	*/
	destroy() {
		const sessionId = this.#sessionID ?? this.#cookies.get(this.#cookieName)?.value;
		if (sessionId) this.#toDestroy.add(sessionId);
		this.#cookies.delete(this.#cookieName, this.#cookieConfig);
		this.#sessionID = void 0;
		this.#data = void 0;
		this.#dirty = true;
	}
	/**
	* Regenerates the session, creating a new session ID. The existing session data is preserved.
	*/
	async regenerate() {
		let data = /* @__PURE__ */ new Map();
		try {
			data = await this.#ensureData();
		} catch (err) {
			console.error("Failed to load session data during regeneration:", err);
		}
		const oldSessionId = this.#sessionID;
		this.#sessionID = crypto.randomUUID();
		this.#sessionIDFromCookie = false;
		this.#data = data;
		this.#dirty = true;
		await this.#setCookie();
		if (oldSessionId && this.#storage) this.#storage.removeItem(oldSessionId).catch((err) => {
			console.error("Failed to remove old session data:", err);
		});
	}
	async [PERSIST_SYMBOL]() {
		if (!this.#dirty && !this.#toDestroy.size) return;
		const storage = await this.#ensureStorage();
		if (this.#dirty && this.#data) {
			const data = await this.#ensureData();
			this.#toDelete.forEach((key2) => data.delete(key2));
			const key = this.#ensureSessionID();
			let serialized;
			try {
				serialized = stringify$1(data);
			} catch (err) {
				throw new AstroError({
					...SessionStorageSaveError,
					message: SessionStorageSaveError.message("The session data could not be serialized.", this.#config.driver)
				}, { cause: err });
			}
			await storage.setItem(key, serialized);
			this.#dirty = false;
		}
		if (this.#toDestroy.size > 0) {
			const cleanupPromises = [...this.#toDestroy].map((sessionId) => storage.removeItem(sessionId).catch((err) => {
				console.error("Failed to clean up session %s:", sessionId, err);
			}));
			await Promise.all(cleanupPromises);
			this.#toDestroy.clear();
		}
	}
	get sessionID() {
		return this.#sessionID;
	}
	/**
	* Loads a session from storage with the given ID, and replaces the current session.
	* Any changes made to the current session will be lost.
	* This is not normally needed, as the session is automatically loaded using the cookie.
	* However it can be used to restore a session where the ID has been recorded somewhere
	* else (e.g. in a database).
	*/
	async load(sessionID) {
		this.#sessionID = sessionID;
		this.#data = void 0;
		await this.#setCookie();
		await this.#ensureData();
	}
	/**
	* Sets the session cookie.
	*/
	async #setCookie() {
		if (!VALID_COOKIE_REGEX.test(this.#cookieName)) throw new AstroError({
			...SessionStorageSaveError,
			message: "Invalid cookie name. Cookie names can only contain letters, numbers, and dashes."
		});
		const value = this.#ensureSessionID();
		this.#cookies.set(this.#cookieName, value, this.#cookieConfig);
	}
	/**
	* Attempts to load the session data from storage, or creates a new data object if none exists.
	* If there is existing partial data, it will be merged into the new data object.
	*/
	async #ensureData() {
		if (this.#data && !this.#partial) return this.#data;
		this.#data ??= /* @__PURE__ */ new Map();
		if (!this.#sessionID && !this.#cookies.get(this.#cookieName)?.value) {
			this.#partial = false;
			return this.#data;
		}
		const raw = await (await this.#ensureStorage()).get(this.#ensureSessionID());
		if (!raw) {
			if (this.#sessionIDFromCookie) {
				this.#sessionID = crypto.randomUUID();
				this.#sessionIDFromCookie = false;
				if (this.#cookieSet) await this.#setCookie();
			}
			return this.#data;
		}
		try {
			const storedMap = unflatten$1(raw);
			if (!(storedMap instanceof Map)) {
				await this.destroy();
				throw new AstroError({
					...SessionStorageInitError,
					message: SessionStorageInitError.message("The session data was an invalid type.", this.#config.driver)
				});
			}
			const now = Date.now();
			for (const [key, value] of storedMap) {
				const expired = typeof value.expires === "number" && value.expires < now;
				if (!this.#data.has(key) && !this.#toDelete.has(key) && !expired) this.#data.set(key, value);
			}
			this.#partial = false;
			return this.#data;
		} catch (err) {
			await this.destroy();
			if (err instanceof AstroError) throw err;
			throw new AstroError({
				...SessionStorageInitError,
				message: SessionStorageInitError.message("The session data could not be parsed.", this.#config.driver)
			}, { cause: err });
		}
	}
	/**
	* Returns the session ID, generating a new one if it does not exist.
	*/
	#ensureSessionID() {
		if (!this.#sessionID) {
			const cookieValue = this.#cookies.get(this.#cookieName)?.value;
			if (cookieValue) {
				this.#sessionID = cookieValue;
				this.#sessionIDFromCookie = true;
			} else this.#sessionID = crypto.randomUUID();
		}
		return this.#sessionID;
	}
	/**
	* Ensures the storage is initialized.
	* This is called automatically when a storage operation is needed.
	*/
	async #ensureStorage() {
		if (this.#storage) return this.#storage;
		if (AstroSession.#sharedStorage.has(this.#config.driver)) {
			this.#storage = AstroSession.#sharedStorage.get(this.#config.driver);
			return this.#storage;
		}
		if (!this.#driverFactory) throw new AstroError({
			...SessionStorageInitError,
			message: SessionStorageInitError.message("Astro could not load the driver correctly. Does it exist?", this.#config.driver)
		});
		const driver = this.#driverFactory;
		try {
			this.#storage = createStorage({ driver: {
				...driver(this.#config.options),
				hasItem() {
					return false;
				},
				getKeys() {
					return [];
				}
			} });
			AstroSession.#sharedStorage.set(this.#config.driver, this.#storage);
			return this.#storage;
		} catch (err) {
			throw new AstroError({
				...SessionStorageInitError,
				message: SessionStorageInitError.message("Unknown error", this.#config.driver)
			}, { cause: err });
		}
	}
};
//#endregion
//#region node_modules/astro/dist/core/session/handler.js
var SESSION_KEY = "session";
function provideSession(state) {
	state.pipeline.usedFeatures |= PipelineFeatures.sessions;
	const config = state.pipeline.manifest.sessionConfig;
	if (!config) return;
	return provideSessionAsync(state, config);
}
async function provideSessionAsync(state, config) {
	const pipeline = state.pipeline;
	const driverFactory = await pipeline.getSessionDriver();
	if (!driverFactory) return;
	state.provide(SESSION_KEY, {
		create() {
			const cookies = state.cookies;
			return new AstroSession({
				cookies,
				config,
				runtimeMode: pipeline.runtimeMode,
				driverFactory,
				mockStorage: null
			});
		},
		finalize(session) {
			return session[PERSIST_SYMBOL]();
		}
	});
}
//#endregion
//#region node_modules/astro/dist/core/routing/handler.js
var AstroHandler = class {
	#app;
	#trailingSlashHandler;
	#actionHandler;
	#astroMiddleware;
	#pagesHandler;
	#cacheHandler;
	/** Bound callback for the middleware chain — created once, reused per request. */
	#renderRouteCallback;
	/**
	* i18n post-processor. Only set when the app has i18n configured and
	* the strategy is not `manual` — for the manual strategy users wire
	* `astro:i18n.middleware(...)` into their own `onRequest`.
	*/
	#i18n;
	/** Whether sessions are configured on the manifest. */
	#hasSession;
	constructor(app) {
		this.#app = app;
		this.#trailingSlashHandler = new TrailingSlashHandler(app);
		this.#actionHandler = new ActionHandler();
		this.#astroMiddleware = new AstroMiddleware(app.pipeline);
		this.#pagesHandler = new PagesHandler(app.pipeline);
		this.#cacheHandler = new CacheHandler(app);
		this.#renderRouteCallback = this.#actionsAndPages.bind(this);
		this.#hasSession = !!app.manifest.sessionConfig;
		const i18n = app.manifest.i18n;
		if (i18n && i18n.strategy !== "manual") this.#i18n = new I18n(i18n, app.manifest.base, app.manifest.trailingSlash, app.manifest.buildFormat);
	}
	/**
	* Runs actions then pages — the callback at the bottom of the
	* middleware chain. Bound once in the constructor to avoid
	* per-request closure allocation.
	*/
	#actionsAndPages(state, ctx) {
		if (!state.skipMiddleware) {
			const actionResult = this.#actionHandler.handle(ctx, state);
			if (actionResult) return actionResult.then((response) => response ?? this.#pagesHandler.handle(state, ctx));
		}
		return this.#pagesHandler.handle(state, ctx);
	}
	async handle(state) {
		state.pipeline.usedFeatures |= ALL_PIPELINE_FEATURES;
		if (state.invalidEncoding) return new Response(null, {
			status: 400,
			statusText: "Bad Request"
		});
		const trailingSlashRedirect = this.#trailingSlashHandler.handle(state);
		if (trailingSlashRedirect) return trailingSlashRedirect;
		if (!state.routeData) return this.#app.renderError(state.request, {
			...state.renderOptions,
			status: 404,
			pathname: state.pathname
		});
		return this.render(state);
	}
	/**
	* Renders a response for the given `FetchState`. Assumes
	* trailing-slash redirects and routeData resolution have already run.
	*
	* User-triggered rewrites (`Astro.rewrite` / `ctx.rewrite`) go through
	* `Rewrites.execute` on the current `FetchState` — they mutate the
	* existing state in place and re-run middleware + page dispatch.
	*/
	async render(state) {
		const routeData = state.routeData;
		const pathname = state.pathname;
		const request = state.request;
		const { addCookieHeader } = state.renderOptions;
		state.status = this.#app.getDefaultStatusCode(routeData, pathname);
		let response;
		try {
			const sessionP = this.#hasSession ? provideSession(state) : void 0;
			const cacheP = provideCache(state);
			if (sessionP || cacheP) await Promise.all([sessionP, cacheP]);
			state.pipeline.usedFeatures |= PipelineFeatures.sessions;
			if (routeData.type === "redirect") {
				const redirectResponse = await renderRedirect(state);
				this.#app.logThisRequest({
					pathname,
					method: request.method,
					statusCode: redirectResponse.status,
					isRewrite: false,
					timeStart: state.timeStart
				});
				prepareResponse(redirectResponse, { addCookieHeader });
				this.#app.pipeline.logger.flush();
				return redirectResponse;
			}
			if (!this.#app.pipeline.cacheProvider) {
				this.#app.pipeline.usedFeatures |= PipelineFeatures.cache;
				response = await this.#astroMiddleware.handle(state, this.#renderRouteCallback);
				if (this.#i18n) response = await this.#i18n.finalize(state, response);
			} else {
				const runPipeline = async () => {
					let res = await this.#astroMiddleware.handle(state, this.#renderRouteCallback);
					if (this.#i18n) res = await this.#i18n.finalize(state, res);
					return res;
				};
				response = await this.#cacheHandler.handle(state, runPipeline);
			}
			this.#app.logThisRequest({
				pathname,
				method: request.method,
				statusCode: response.status,
				isRewrite: state.isRewriting,
				timeStart: state.timeStart
			});
		} catch (err) {
			this.#app.logger.error(null, err.stack || err.message || String(err));
			return this.#app.renderError(request, {
				...state.renderOptions,
				status: 500,
				error: err,
				pathname: state.pathname
			});
		} finally {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		}
		if (REROUTABLE_STATUS_CODES.includes(response.status) && response.body === null && !state.skipErrorReroute) return this.#app.renderError(request, {
			...state.renderOptions,
			response,
			status: response.status,
			error: response.status === 500 ? null : void 0,
			pathname: state.pathname
		});
		prepareResponse(response, { addCookieHeader });
		this.#app.pipeline.logger.flush();
		return response;
	}
};
//#endregion
//#region node_modules/astro/dist/core/fetch/default-handler.js
var DefaultFetchHandler = class {
	#app;
	#handler;
	constructor(app) {
		this.#app = app ?? null;
		this.#handler = app ? new AstroHandler(app) : null;
	}
	/**
	* Fast path: called directly by `BaseApp.render()` with pre-resolved
	* options, avoiding the `Reflect.set/get` round-trip through the request.
	*/
	renderWithOptions(request, options) {
		if (!this.#app) {
			const app = Reflect.get(request, appSymbol);
			if (!app) throw new Error("No fetch handler provided.");
			this.#app = app;
			this.#handler = new AstroHandler(app);
		}
		const state = new FetchState(this.#app.pipeline, request, options);
		return this.#handler.handle(state);
	}
	fetch = (request) => {
		if (!this.#app) {
			const app = Reflect.get(request, appSymbol);
			if (!app) throw new Error("No fetch handler provided.");
			this.#app = app;
			this.#handler = new AstroHandler(app);
		}
		const state = new FetchState(this.#app.pipeline, request);
		if (!this.#handler) throw new Error("No fetch handler provided.");
		return this.#handler.handle(state);
	};
};
//#endregion
//#region \0virtual:astro:fetchable
var _virtual_astro_fetchable_default = new DefaultFetchHandler();
//#endregion
//#region node_modules/astro/dist/i18n/error-routes.js
function isLocalizedErrorRoute(route, status, locales) {
	if (!locales) return false;
	const suffix = `/${status}`;
	if (!route.endsWith(suffix)) return false;
	const localeSegment = route.slice(0, -suffix.length);
	if (!localeSegment || localeSegment.includes("/", 1)) return false;
	return pathHasLocale(localeSegment, locales);
}
function getErrorRoutePath(pathname, status, routes, locales, appendTrailingSlash = false) {
	const suffix = appendTrailingSlash ? "/" : "";
	if (locales) {
		const firstSegment = pathname.split("/").find(Boolean);
		if (firstSegment && pathHasLocale(`/${firstSegment}`, locales)) {
			const localized = `/${firstSegment}/${status}`;
			if (routes.some((route) => route.route === localized)) return `${localized}${suffix}`;
		}
	}
	return `/${status}${suffix}`;
}
//#endregion
//#region node_modules/astro/dist/core/output-filename.js
var STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["/404", "/500"]);
function getOutputFilename(buildFormat, name, routeData) {
	if (routeData.type === "endpoint") return name;
	if (name === "/" || name === "") return name === "" ? "index.html" : "/index.html";
	if (buildFormat === "file" || STATUS_CODE_PAGES.has(name)) return `${removeTrailingForwardSlash(name || "index")}.html`;
	if (buildFormat === "preserve" && !routeData.isIndex) return `${removeTrailingForwardSlash(name || "index")}.html`;
	return `${removeTrailingForwardSlash(name)}/index.html`;
}
//#endregion
//#region node_modules/astro/dist/core/errors/default-handler.js
var DefaultErrorHandler = class {
	#app;
	#astroMiddleware;
	#pagesHandler;
	constructor(app) {
		this.#app = app;
		this.#astroMiddleware = new AstroMiddleware(app.pipeline);
		this.#pagesHandler = new PagesHandler(app.pipeline);
	}
	async renderError(request, { status, response: originalResponse, skipMiddleware = false, error, pathname, ...resolvedRenderOptions }) {
		const app = this.#app;
		const resolvedPathname = pathname ?? new FetchState(app.pipeline, request).pathname;
		const errorRouteData = matchRoute(getErrorRoutePath(resolvedPathname, status, app.manifestData.routes, app.manifest.i18n?.locales, app.manifest.trailingSlash === "always"), app.manifestData);
		const url = new URL(request.url);
		if (errorRouteData) {
			if (errorRouteData.prerender) {
				const allowedDomains = app.manifest.allowedDomains;
				const safeOrigin = validateHost(url.host, url.protocol.replace(":", ""), allowedDomains) ? url.origin : `${url.protocol}//localhost`;
				const statusURL = new URL(`${app.baseWithoutTrailingSlash}${getOutputFilename(app.manifest.buildFormat, errorRouteData.route, errorRouteData)}`, safeOrigin);
				if (statusURL.toString() !== request.url && resolvedRenderOptions.prerenderedErrorPageFetch) try {
					const newResponse = mergeResponses(await resolvedRenderOptions.prerenderedErrorPageFetch(statusURL.toString()), originalResponse, {
						status,
						removeContentEncodingHeaders: true
					});
					prepareResponse(newResponse, resolvedRenderOptions);
					return newResponse;
				} catch {
					const response2 = mergeResponses(new Response(null, { status }), originalResponse);
					prepareResponse(response2, resolvedRenderOptions);
					return response2;
				}
			}
			const mod = await app.pipeline.getComponentByRoute(errorRouteData);
			const errorState = new FetchState(app.pipeline, request);
			errorState.skipMiddleware = skipMiddleware;
			errorState.clientAddress = resolvedRenderOptions.clientAddress;
			errorState.routeData = errorRouteData;
			errorState.pathname = resolvedPathname;
			errorState.status = status;
			errorState.componentInstance = mod;
			errorState.locals = resolvedRenderOptions.locals ?? {};
			errorState.initialProps = { error };
			try {
				await provideSession(errorState);
				const newResponse = mergeResponses(await this.#astroMiddleware.handle(errorState, this.#pagesHandler.handle.bind(this.#pagesHandler)), originalResponse);
				prepareResponse(newResponse, resolvedRenderOptions);
				return newResponse;
			} catch {
				if (skipMiddleware === false) return this.renderError(request, {
					...resolvedRenderOptions,
					status,
					error,
					response: originalResponse,
					skipMiddleware: true,
					pathname: resolvedPathname
				});
			} finally {
				await errorState.finalizeAll();
			}
		}
		const response = mergeResponses(new Response(null, { status }), originalResponse);
		prepareResponse(response, resolvedRenderOptions);
		return response;
	}
};
function mergeResponses(newResponse, originalResponse, override) {
	let newResponseHeaders = newResponse.headers;
	if (override?.removeContentEncodingHeaders) {
		newResponseHeaders = new Headers(newResponseHeaders);
		newResponseHeaders.delete("Content-Encoding");
		newResponseHeaders.delete("Content-Length");
	}
	if (!originalResponse) {
		if (override !== void 0) return new Response(newResponse.body, {
			status: override.status,
			statusText: newResponse.statusText,
			headers: newResponseHeaders
		});
		return newResponse;
	}
	const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
	try {
		originalResponse.headers.delete("Content-type");
		originalResponse.headers.delete("Content-Length");
		originalResponse.headers.delete("Transfer-Encoding");
	} catch {}
	const newHeaders = new Headers();
	const seen = /* @__PURE__ */ new Set();
	for (const [name, value] of originalResponse.headers) {
		newHeaders.append(name, value);
		seen.add(name.toLowerCase());
	}
	for (const [name, value] of newResponseHeaders) if (!seen.has(name.toLowerCase())) newHeaders.append(name, value);
	const mergedResponse = new Response(newResponse.body, {
		status,
		statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
		headers: newHeaders
	});
	const originalCookies = getCookiesFromResponse(originalResponse);
	const newCookies = getCookiesFromResponse(newResponse);
	if (originalCookies) {
		if (newCookies) for (const cookieValue of newCookies.consume()) originalResponse.headers.append("set-cookie", cookieValue);
		attachCookiesToResponse(mergedResponse, originalCookies);
	} else if (newCookies) attachCookiesToResponse(mergedResponse, newCookies);
	return mergedResponse;
}
//#endregion
//#region node_modules/astro/dist/core/app/base.js
var BaseApp = class BaseApp {
	manifest;
	manifestData;
	pipeline;
	#adapterLogger;
	baseWithoutTrailingSlash;
	/**
	* The handler that turns incoming `Request` objects into `Response`s.
	* Defaults to a `DefaultFetchHandler` pinned to this app and can be
	* overridden via `setFetchHandler` — typically by the bundled
	* entrypoint after importing `virtual:astro:fetchable`.
	*/
	#fetchHandler;
	#errorHandler;
	/**
	* Whether a custom fetch handler (from `src/fetch.ts`) has been set
	* via `setFetchHandler`. When false, the `DefaultFetchHandler` is
	* in use and all features are implicitly active.
	*/
	#hasCustomFetchHandler = false;
	/**
	* Whether the missing-feature check has already run. We only want
	* to warn once — after the first request in dev, or at build end.
	*/
	#featureCheckDone = false;
	get logger() {
		return this.pipeline.logger;
	}
	get adapterLogger() {
		const currentOptions = this.logger.options;
		if (!this.#adapterLogger || this.#adapterLogger.options !== currentOptions) this.#adapterLogger = new AstroIntegrationLogger(currentOptions, this.manifest.adapterName);
		return this.#adapterLogger;
	}
	constructor(manifest, streaming = true, ...args) {
		this.manifest = manifest;
		this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest.base);
		this.pipeline = this.createPipeline(streaming, manifest, ...args);
		this.manifestData = this.pipeline.manifestData;
		this.#fetchHandler = new DefaultFetchHandler(this);
		this.#errorHandler = this.createErrorHandler();
	}
	/**
	* Override the fetch handler used to dispatch requests. Entrypoints
	* call this with the default export of `virtual:astro:fetchable` to
	* plug in a user-authored handler from `src/fetch.ts`.
	*/
	setFetchHandler(handler) {
		this.#fetchHandler = handler;
		this.#hasCustomFetchHandler = !(handler instanceof DefaultFetchHandler);
	}
	/**
	* Returns the error handler strategy used by this app. Override to
	* provide environment-specific behavior (dev overlay, build-time throws, etc.).
	*/
	createErrorHandler() {
		return new DefaultErrorHandler(this);
	}
	/**
	* Resets the cached adapter logger so it picks up a new logger instance.
	* Used by BuildApp when the logger is replaced via setOptions().
	*/
	resetAdapterLogger() {
		this.#adapterLogger = void 0;
	}
	getAllowedDomains() {
		return this.manifest.allowedDomains;
	}
	matchesAllowedDomains(forwardedHost, protocol) {
		return BaseApp.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
	}
	static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
		if (!allowedDomains || allowedDomains.length === 0) return false;
		try {
			const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
			return allowedDomains.some((pattern) => {
				return matchPattern(testUrl, pattern);
			});
		} catch {
			return false;
		}
	}
	set setManifestData(newManifestData) {
		this.manifestData = newManifestData;
		this.pipeline.manifestData = newManifestData;
		this.pipeline.rebuildRouter();
	}
	removeBase(pathname) {
		pathname = collapseDuplicateLeadingSlashes(pathname);
		if (pathname.startsWith(this.manifest.base)) return pathname.slice(this.baseWithoutTrailingSlash.length + 1);
		return pathname;
	}
	/**
	* Decodes a pathname with `decodeURI`, falling back to the raw pathname when it
	* contains an invalid percent-sequence (e.g. `%C0%AF`, an overlong-UTF-8 encoding of
	* `/` commonly sent by path-traversal scanners). A raw `decodeURI()` would throw
	* `URIError: URI malformed`, and because `match()` runs before `render()` that error
	* escapes the adapter's request handler as an uncaught exception (HTTP 500) that user
	* middleware can't catch.
	*/
	safeDecodeURI(pathname) {
		try {
			return decodeURI(pathname);
		} catch (e) {
			this.adapterLogger.debug(e.toString());
			return pathname;
		}
	}
	/**
	* Extracts the base-stripped, decoded pathname from a request.
	* Used by adapters to compute the pathname for dev-mode route matching.
	*/
	getPathnameFromRequest(request) {
		const url = new URL(request.url);
		const pathname = prependForwardSlash(this.removeBase(url.pathname));
		return this.safeDecodeURI(pathname);
	}
	/**
	* Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
	* routes aren't returned, even if they are matched.
	*
	* When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
	* @param request
	* @param allowPrerenderedRoutes
	*/
	match(request, allowPrerenderedRoutes = false) {
		const url = new URL(request.url);
		if (this.manifest.assets.has(url.pathname)) return void 0;
		let pathname = this.computePathnameFromDomain(request);
		if (!pathname) pathname = prependForwardSlash(this.removeBase(url.pathname));
		const routeData = this.pipeline.matchRoute(this.safeDecodeURI(pathname));
		if (!routeData) return void 0;
		if (allowPrerenderedRoutes) return routeData;
		if (routeData.prerender) {
			if (routeData.params.length > 0) return this.pipeline.matchAllRoutes(this.safeDecodeURI(pathname)).find((r) => !r.prerender);
			return;
		}
		return routeData;
	}
	/**
	* A matching route function to use in the development server.
	* Contrary to the `.match` function, this function resolves props and params, returning the correct
	* route based on the priority, segments. It also returns the correct, resolved pathname.
	* @param pathname
	*/
	devMatch(pathname) {}
	computePathnameFromDomain(request) {
		return computePathnameFromDomain(request, new URL(request.url), this.manifest.i18n, this.manifest.base, this.manifest.trailingSlash, this.logger);
	}
	async render(request, { addCookieHeader = false, clientAddress = Reflect.get(request, clientAddressSymbol), locals, prerenderedErrorPageFetch = fetch, routeData, waitUntil } = {}) {
		await this.pipeline.getLogger();
		if (routeData) {
			this.logger.debug("router", "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ", request.url);
			this.logger.debug("router", "RouteData");
			this.logger.debug("router", routeData);
		}
		if (locals) {
			if (typeof locals !== "object") {
				const error = new AstroError(LocalsNotAnObject);
				this.logger.error(null, error.stack);
				return this.renderError(request, {
					addCookieHeader,
					clientAddress,
					prerenderedErrorPageFetch,
					locals: void 0,
					routeData,
					waitUntil,
					status: 500,
					error
				});
			}
		}
		if (!routeData) {
			const domainPathname = this.computePathnameFromDomain(request);
			if (domainPathname) routeData = this.pipeline.matchRoute(this.safeDecodeURI(domainPathname));
		}
		const resolvedOptions = {
			addCookieHeader,
			clientAddress,
			prerenderedErrorPageFetch,
			locals,
			routeData,
			waitUntil
		};
		let response;
		if (this.#fetchHandler instanceof DefaultFetchHandler) {
			Reflect.set(request, appSymbol, this);
			response = await this.#fetchHandler.renderWithOptions(request, resolvedOptions);
		} else {
			setRenderOptions(request, resolvedOptions);
			Reflect.set(request, appSymbol, this);
			response = await this.#fetchHandler.fetch(request);
		}
		this.#warnMissingFeatures();
		if (response.headers.get("X-Astro-Error")) {
			response.headers.delete(ASTRO_ERROR_HEADER);
			return this.renderError(request, {
				addCookieHeader,
				clientAddress,
				prerenderedErrorPageFetch,
				locals,
				routeData,
				waitUntil,
				response,
				status: response.status,
				error: response.status === 500 ? null : void 0
			});
		}
		return response;
	}
	setCookieHeaders(response) {
		return getSetCookiesFromResponse(response);
	}
	/**
	* Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
	* For example,
	* ```ts
	* for (const cookie_ of App.getSetCookieFromResponse(response)) {
	*     const cookie: string = cookie_
	* }
	* ```
	* @param response The response to read cookies from.
	* @returns An iterator that yields key-value pairs as equal-sign-separated strings.
	*/
	static getSetCookieFromResponse = getSetCookiesFromResponse;
	/**
	* If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
	* This also handles pre-rendered /404 or /500 routes.
	*
	* Delegates to the app's configured `ErrorHandler`. To customize behavior
	* for a specific environment, override `createErrorHandler()` rather than
	* this method.
	*/
	async renderError(request, options) {
		return this.#errorHandler.renderError(request, options);
	}
	/**
	* One-shot check: after the first request with a custom `src/fetch.ts`,
	* compare `usedFeatures` against the manifest and warn about any
	* configured features the user's pipeline doesn't call.
	*/
	#warnMissingFeatures() {
		if (this.#featureCheckDone || !this.#hasCustomFetchHandler) return;
		this.#featureCheckDone = true;
		const manifest = this.manifest;
		const missing = [];
		const used = this.pipeline.usedFeatures;
		if (manifest.routes.some((r) => r.routeData.type === "redirect") && !(used & PipelineFeatures.redirects)) missing.push("redirects");
		if (manifest.sessionConfig && !(used & PipelineFeatures.sessions)) missing.push("sessions");
		if (manifest.actions && !(used & PipelineFeatures.actions)) missing.push("actions");
		if (manifest.middleware && !(used & PipelineFeatures.middleware)) missing.push("middleware");
		if (manifest.i18n && manifest.i18n.strategy !== "manual" && !(used & PipelineFeatures.i18n)) missing.push("i18n");
		if (manifest.cacheConfig && !(used & PipelineFeatures.cache)) missing.push("cache");
		for (const feature of missing) this.logger.warn("router", `Your project uses ${feature}, but your custom src/fetch.ts does not call the ${feature}() handler. This feature will not work unless you add it to your fetch.ts pipeline.`);
	}
	getDefaultStatusCode(routeData, pathname) {
		if (!routeData.pattern.test(pathname)) {
			for (const fallbackRoute of routeData.fallbackRoutes) if (fallbackRoute.pattern.test(pathname)) return 302;
		}
		const route = removeTrailingForwardSlash(routeData.route);
		const locales = this.manifest.i18n?.locales;
		if (isRoute404(route) || isLocalizedErrorRoute(route, 404, locales)) return 404;
		if (isRoute500(route) || isLocalizedErrorRoute(route, 500, locales)) return 500;
		return 200;
	}
	getManifest() {
		return this.pipeline.manifest;
	}
	logThisRequest({ pathname, method, statusCode, isRewrite, timeStart }) {
		const timeEnd = performance.now();
		this.logRequest({
			pathname,
			method,
			statusCode,
			isRewrite,
			reqTime: timeEnd - timeStart
		});
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/getAssetsPrefix.js
function getAssetsPrefix(fileExtension, assetsPrefix) {
	let prefix = "";
	if (!assetsPrefix) prefix = "";
	else if (typeof assetsPrefix === "string") prefix = assetsPrefix;
	else prefix = assetsPrefix[fileExtension.slice(1)] || assetsPrefix.fallback;
	return prefix;
}
//#endregion
//#region node_modules/astro/dist/core/render/ssr-element.js
var URL_PARSE_BASE = "https://astro.build";
function splitAssetPath(path) {
	const parsed = new URL(path, URL_PARSE_BASE);
	return {
		pathname: !URL.canParse(path) && !path.startsWith("/") ? parsed.pathname.slice(1) : parsed.pathname,
		suffix: `${parsed.search}${parsed.hash}`
	};
}
function appendQueryParams(path, queryParams) {
	const queryString = queryParams.toString();
	if (!queryString) return path;
	const hashIndex = path.indexOf("#");
	const basePath = hashIndex === -1 ? path : path.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
	return `${basePath}${basePath.includes("?") ? "&" : "?"}${queryString}${hash}`;
}
function createAssetLink(href, base, assetsPrefix, queryParams) {
	const { pathname, suffix } = splitAssetPath(href);
	let url = "";
	if (assetsPrefix) url = joinPaths(getAssetsPrefix(fileExtension(pathname), assetsPrefix), slash(pathname)) + suffix;
	else if (base) url = prependForwardSlash(joinPaths(base, slash(pathname))) + suffix;
	else url = href;
	if (queryParams) url = appendQueryParams(url, queryParams);
	return url;
}
function createStylesheetElement(stylesheet, base, assetsPrefix, queryParams) {
	if (stylesheet.type === "inline") return {
		props: {},
		children: stylesheet.content
	};
	else return {
		props: {
			rel: "stylesheet",
			href: createAssetLink(stylesheet.src, base, assetsPrefix, queryParams)
		},
		children: ""
	};
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix, queryParams) {
	return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix, queryParams)));
}
function createModuleScriptElement(script, base, assetsPrefix, queryParams) {
	if (script.type === "external") return createModuleScriptElementWithSrc(script.value, base, assetsPrefix, queryParams);
	else return {
		props: { type: "module" },
		children: script.value
	};
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix, queryParams) {
	return {
		props: {
			type: "module",
			src: createAssetLink(src, base, assetsPrefix, queryParams)
		},
		children: ""
	};
}
//#endregion
//#region node_modules/astro/dist/core/app/pipeline.js
var AppPipeline = class AppPipeline extends Pipeline {
	getName() {
		return "AppPipeline";
	}
	static create({ manifest, streaming }) {
		const resolve = async function resolve2(specifier) {
			if (!(specifier in manifest.entryModules)) throw new Error(`Unable to resolve [${specifier}]`);
			const bundlePath = manifest.entryModules[specifier];
			if (bundlePath.startsWith("data:") || bundlePath.length === 0) return bundlePath;
			else return createAssetLink(bundlePath, manifest.base, manifest.assetsPrefix);
		};
		const logger = createConsoleLogger({ level: manifest.logLevel });
		return new AppPipeline(logger, manifest, "production", manifest.renderers, resolve, streaming, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
	}
	async headElements(routeData) {
		const { assetsPrefix, base } = this.manifest;
		const routeInfo = this.manifest.routes.find((route) => route.routeData.route === routeData.route);
		const links = /* @__PURE__ */ new Set();
		const scripts = /* @__PURE__ */ new Set();
		const styles = createStylesheetElementSet(routeInfo?.styles ?? [], base, assetsPrefix);
		for (const script of routeInfo?.scripts ?? []) if ("stage" in script) {
			if (script.stage === "head-inline") scripts.add({
				props: {},
				children: script.children
			});
		} else scripts.add(createModuleScriptElement(script, base, assetsPrefix));
		return {
			links,
			styles,
			scripts
		};
	}
	componentMetadata() {}
	async getComponentByRoute(routeData) {
		return (await this.getModuleForRoute(routeData)).page();
	}
	async getModuleForRoute(route) {
		for (const defaultRoute of this.defaultRoutes) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
		let routeToProcess = route;
		if (routeIsRedirect(route)) if (route.redirectRoute) routeToProcess = route.redirectRoute;
		else return RedirectSinglePageBuiltModule;
		else if (routeIsFallback(route)) routeToProcess = getFallbackRoute(route, this.manifest.routes);
		if (this.manifest.pageMap) {
			const importComponentInstance = this.manifest.pageMap.get(routeToProcess.component);
			if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
			return await importComponentInstance();
		} else if (this.manifest.pageModule) return this.manifest.pageModule;
		throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
	}
	async tryRewrite(payload, request) {
		const { newUrl, pathname, routeData } = findRouteToRewrite({
			payload,
			request,
			routes: this.manifest?.routes.map((r) => r.routeData),
			trailingSlash: this.manifest.trailingSlash,
			buildFormat: this.manifest.buildFormat,
			base: this.manifest.base,
			outDir: this.manifest?.serverLike ? this.manifest.buildClientDir : this.manifest.outDir
		});
		return {
			newUrl,
			pathname,
			componentInstance: await this.getComponentByRoute(routeData),
			routeData
		};
	}
};
//#endregion
//#region node_modules/astro/dist/core/app/app.js
var App = class extends BaseApp {
	createPipeline(streaming) {
		return AppPipeline.create({
			manifest: this.manifest,
			streaming
		});
	}
	isDev() {
		return false;
	}
	logRequest(_options) {}
};
//#endregion
//#region node_modules/astro/dist/core/app/manifest.js
function deserializeManifest(serializedManifest, routesList) {
	const routes = [];
	if (serializedManifest.routes) for (const serializedRoute of serializedManifest.routes) {
		routes.push({
			...serializedRoute,
			routeData: deserializeRouteData(serializedRoute.routeData)
		});
		const route = serializedRoute;
		route.routeData = deserializeRouteData(serializedRoute.routeData);
	}
	if (routesList) for (const route of routesList?.routes) routes.push({
		file: "",
		links: [],
		scripts: [],
		styles: [],
		routeData: route
	});
	const assets = new Set(serializedManifest.assets);
	const componentMetadata = new Map(serializedManifest.componentMetadata);
	const inlinedScripts = new Map(serializedManifest.inlinedScripts);
	const clientDirectives = new Map(serializedManifest.clientDirectives);
	const key = decodeKey(serializedManifest.key);
	return {
		middleware() {
			return { onRequest: NOOP_MIDDLEWARE_FN };
		},
		...serializedManifest,
		rootDir: new URL(serializedManifest.rootDir),
		srcDir: new URL(serializedManifest.srcDir),
		publicDir: new URL(serializedManifest.publicDir),
		outDir: new URL(serializedManifest.outDir),
		cacheDir: new URL(serializedManifest.cacheDir),
		buildClientDir: new URL(serializedManifest.buildClientDir),
		buildServerDir: new URL(serializedManifest.buildServerDir),
		assets,
		componentMetadata,
		inlinedScripts,
		clientDirectives,
		routes,
		key
	};
}
function deserializeRouteData(rawRouteData) {
	return {
		route: rawRouteData.route,
		type: rawRouteData.type,
		pattern: new RegExp(rawRouteData.pattern),
		params: rawRouteData.params,
		component: rawRouteData.component,
		pathname: rawRouteData.pathname || void 0,
		segments: rawRouteData.segments,
		prerender: rawRouteData.prerender,
		redirect: rawRouteData.redirect,
		redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
		fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
			return deserializeRouteData(fallback);
		}),
		isIndex: rawRouteData.isIndex,
		origin: rawRouteData.origin,
		distURL: rawRouteData.distURL
	};
}
function deserializeRouteInfo(rawRouteInfo) {
	return {
		styles: rawRouteInfo.styles,
		file: rawRouteInfo.file,
		links: rawRouteInfo.links,
		scripts: rawRouteInfo.scripts,
		routeData: deserializeRouteData(rawRouteInfo.routeData)
	};
}
//#endregion
//#region \0virtual:astro:renderers
var renderers = [];
[
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"type": "page",
			"component": "_server-islands.astro",
			"params": ["name"],
			"segments": [[{
				"content": "_server-islands",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "name",
				"dynamic": true,
				"spread": false
			}]],
			"pattern": "^\\/_server-islands\\/([^/]+?)\\/?$",
			"prerender": false,
			"isIndex": false,
			"fallbackRoutes": [],
			"route": "/_server-islands/[name]",
			"origin": "internal",
			"distURL": [],
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/_image",
			"component": "node_modules/astro/dist/assets/endpoint/generic.js",
			"params": [],
			"pathname": "/_image",
			"pattern": "^\\/_image\\/?$",
			"segments": [[{
				"content": "_image",
				"dynamic": false,
				"spread": false
			}]],
			"type": "endpoint",
			"prerender": false,
			"fallbackRoutes": [],
			"distURL": [],
			"isIndex": false,
			"origin": "internal",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/admin/suggestions",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/admin\\/suggestions\\/?$",
			"segments": [[{
				"content": "admin",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "suggestions",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/admin/suggestions.astro",
			"pathname": "/admin/suggestions",
			"prerender": false,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/api/suggestions",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/api\\/suggestions\\/?$",
			"segments": [[{
				"content": "api",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "suggestions",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/api/suggestions.ts",
			"pathname": "/api/suggestions",
			"prerender": false,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	}
].map(deserializeRouteInfo);
//#endregion
//#region \0virtual:astro:pages
var _page0 = () => import("./chunks/generic_BHEo_JXT.mjs");
var _page1 = () => import("./chunks/suggestions_Dp7WgeS7.mjs");
var _page2 = () => import("./chunks/suggestions_VW1ebEKk.mjs");
var pageMap = /* @__PURE__ */ new Map([
	["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
	["src/pages/admin/suggestions.astro", _page1],
	["src/pages/api/suggestions.ts", _page2]
]);
//#endregion
//#region \0virtual:astro:manifest
var _manifest = deserializeManifest({"rootDir":"file:///C:/Users/gurpr/lowkeydevs/","cacheDir":"file:///C:/Users/gurpr/lowkeydevs/node_modules/.astro/","outDir":"file:///C:/Users/gurpr/lowkeydevs/dist/","srcDir":"file:///C:/Users/gurpr/lowkeydevs/src/","publicDir":"file:///C:/Users/gurpr/lowkeydevs/public/","buildClientDir":"file:///C:/Users/gurpr/lowkeydevs/dist/client/","buildServerDir":"file:///C:/Users/gurpr/lowkeydevs/dist/server/","adapterName":"@astrojs/vercel","assetsDir":"_astro","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/_image","component":"node_modules/astro/dist/assets/endpoint/generic.js","params":[],"pathname":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"type":"endpoint","prerender":false,"fallbackRoutes":[],"distURL":[],"isIndex":false,"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/suggestions.HvTyoxYf.css"}],"routeData":{"route":"/admin/suggestions","isIndex":false,"type":"page","pattern":"^\\/admin\\/suggestions\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"suggestions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/suggestions.astro","pathname":"/admin/suggestions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/suggestions","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/suggestions\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"suggestions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/suggestions.ts","pathname":"/api/suggestions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools/category/[category]","isIndex":false,"type":"page","pattern":"^\\/tools\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/tools/category/[category].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools/[slug]","isIndex":false,"type":"page","pattern":"^\\/tools\\/([^/]+?)\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tools/[slug].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"serverLike":true,"middlewareMode":"classic","base":"/","trailingSlash":"ignore","compressHTML":"jsx","componentMetadata":[["C:/Users/gurpr/lowkeydevs/src/pages/tools/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/gurpr/lowkeydevs/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/gurpr/lowkeydevs/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gurpr/lowkeydevs/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/Users/gurpr/lowkeydevs/src/pages/tools/category/[category].astro",{"propagation":"none","containsHead":true}],["C:/Users/gurpr/lowkeydevs/src/pages/admin/suggestions.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"astro/entrypoints/prerender":"prerender-entry.T5w592m4.mjs","\u0000virtual:astro:page:src/pages/tools/category/[category]@_@astro":"chunks/_category__DSOxnLUE.mjs","\u0000noop-middleware":"virtual_astro_middleware.mjs","\u0000virtual:astro:page:src/pages/tools/[slug]@_@astro":"chunks/_slug__B6sdkdRW.mjs","\u0000virtual:astro:server-island-manifest":"chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs","\u0000virtual:astro:session-driver":"chunks/_virtual_astro_session-driver_C-PI1Pas.mjs","\u0000virtual:astro:page:src/pages/about@_@astro":"chunks/about_kyhdRbgQ.mjs","\u0000virtual:astro:page:src/pages/index@_@astro":"chunks/index_DdCaTxxx.mjs","\u0000virtual:astro:actions/noop-entrypoint":"chunks/noop-entrypoint_Z3zFhrGC.mjs","\u0000virtual:astro:page:src/pages/privacy@_@astro":"chunks/privacy_dI6JoAzd.mjs","@astrojs/vercel/entrypoint":"entry.mjs","\u0000virtual:astro:page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BHEo_JXT.mjs","C:/Users/gurpr/lowkeydevs/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_hsOhIWDX.mjs","\u0000virtual:astro:page:src/pages/admin/suggestions@_@astro":"chunks/suggestions_Dp7WgeS7.mjs","\u0000virtual:astro:page:src/pages/api/suggestions@_@ts":"chunks/suggestions_VW1ebEKk.mjs","C:/Users/gurpr/lowkeydevs/src/components/SuggestFeatureButton.astro?astro&type=script&index=0&lang.ts":"_astro/SuggestFeatureButton.astro_astro_type_script_index_0_lang.Ck2aPhtq.js","C:/Users/gurpr/lowkeydevs/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.qlHU4Cr4.js","C:/Users/gurpr/lowkeydevs/src/tools/list/remove-em-dash/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.1Yxp-g9c.js","C:/Users/gurpr/lowkeydevs/src/tools/list/strikethrough-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.7p0AWUNW.js","C:/Users/gurpr/lowkeydevs/src/tools/list/strong-password-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.B2qA3m7w.js","C:/Users/gurpr/lowkeydevs/src/tools/list/underline-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.B3luu_Wa.js","C:/Users/gurpr/lowkeydevs/src/tools/list/sign-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BBrs-uX_.js","C:/Users/gurpr/lowkeydevs/src/tools/list/cute-font-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BEwt-lLd.js","C:/Users/gurpr/lowkeydevs/src/tools/list/tiktok-font-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BM1OZoJs.js","C:/Users/gurpr/lowkeydevs/src/tools/list/plain-text-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BMvw3075.js","C:/Users/gurpr/lowkeydevs/src/tools/list/big-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BP0Rsb7D.js","C:/Users/gurpr/lowkeydevs/src/tools/list/discord-font-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BTEeWRUL.js","C:/Users/gurpr/lowkeydevs/src/tools/list/epoch-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BVByh8ov.js","C:/Users/gurpr/lowkeydevs/src/tools/list/caesar-cipher-tool/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BZ51pM6W.js","C:/Users/gurpr/lowkeydevs/src/tools/list/case-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BcWd9krx.js","C:/Users/gurpr/lowkeydevs/src/tools/list/scan-to-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BfN3GyfY.js","C:/Users/gurpr/lowkeydevs/src/tools/list/hex-to-text-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Bfr6K1EB.js","C:/Users/gurpr/lowkeydevs/src/tools/list/sort-words-alphabetically/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Bj0T3dhZ.js","C:/Users/gurpr/lowkeydevs/src/tools/list/hash-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Bj0cWkh8.js","C:/Users/gurpr/lowkeydevs/src/tools/list/css-formatter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Bl3qS0NP.js","C:/Users/gurpr/lowkeydevs/src/tools/list/repeat-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BmOAjdl1.js","C:/Users/gurpr/lowkeydevs/src/tools/list/gothic-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BvDno1vb.js","C:/Users/gurpr/lowkeydevs/src/tools/list/redact-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BwdTrq3i.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-ip-address-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.BxmFDC7q.js","C:/Users/gurpr/lowkeydevs/src/tools/list/bold-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Byk6pAhn.js","C:/Users/gurpr/lowkeydevs/src/tools/list/add-page-numbers/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.C3mz0nvY.js","C:/Users/gurpr/lowkeydevs/src/tools/list/small-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.C9TlI0oe.js","C:/Users/gurpr/lowkeydevs/src/tools/list/rotate-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CDrYj5nb.js","C:/Users/gurpr/lowkeydevs/src/tools/list/remove-underscores/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CGXJETg5.js","C:/Users/gurpr/lowkeydevs/src/tools/list/protect-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CJecJuXR.js","C:/Users/gurpr/lowkeydevs/src/tools/list/unicode-text-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CK9vLDfO.js","C:/Users/gurpr/lowkeydevs/src/tools/list/html-to-markdown-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CKzP7CEY.js","C:/Users/gurpr/lowkeydevs/src/tools/list/character-remover/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CMildfYC.js","C:/Users/gurpr/lowkeydevs/src/tools/list/camelcase-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.COJctm0Q.js","C:/Users/gurpr/lowkeydevs/src/tools/list/powerpoint-to-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.COTr-Pvw.js","C:/Users/gurpr/lowkeydevs/src/tools/list/fonts-for-instagram/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.COn0qO18.js","C:/Users/gurpr/lowkeydevs/src/tools/list/remove-duplicate-lines/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CS86r06C.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pig-latin-translator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CSsxb2ix.js","C:/Users/gurpr/lowkeydevs/src/tools/list/compress-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Cgjq50AO.js","C:/Users/gurpr/lowkeydevs/src/tools/list/twitter-font-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CikpLHBr.js","C:/Users/gurpr/lowkeydevs/src/tools/list/apa-citation-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CmIPW99N.js","C:/Users/gurpr/lowkeydevs/src/tools/list/graphql-formatter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CmnWx--L.js","C:/Users/gurpr/lowkeydevs/src/tools/list/dot-case-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.CriwpRCg.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-password-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.D0zB_MAM.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-choice-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.D4FZi6e6.js","C:/Users/gurpr/lowkeydevs/src/tools/list/png-to-jpg/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.D8DbmxnL.js","C:/Users/gurpr/lowkeydevs/src/tools/list/fancy-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DMR_Iseq.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-letter-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DNS9iwV4.js","C:/Users/gurpr/lowkeydevs/src/tools/list/double-struck-text/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DTITK-cs.js","C:/Users/gurpr/lowkeydevs/src/tools/list/repair-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DUk_lzY-.js","C:/Users/gurpr/lowkeydevs/src/tools/list/unicode-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DWmHL8Cx.js","C:/Users/gurpr/lowkeydevs/src/tools/list/compare-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DYakdec5.js","C:/Users/gurpr/lowkeydevs/src/tools/list/duplicate-word-finder/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DYpiXJCV.js","C:/Users/gurpr/lowkeydevs/src/tools/list/remove-text-formatting/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DiBV5mJv.js","C:/Users/gurpr/lowkeydevs/src/tools/list/html-to-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DiJlMQv2.js","C:/Users/gurpr/lowkeydevs/src/tools/list/add-watermark/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DjEF8Ed3.js","C:/Users/gurpr/lowkeydevs/src/tools/list/svg-to-png/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.DsbbLi4b.js","C:/Users/gurpr/lowkeydevs/src/tools/list/remove-pdf-pages/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Dw-fxdTx.js","C:/Users/gurpr/lowkeydevs/src/tools/list/reverse-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.Ibq2i9KG.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-number-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.J38IcoEO.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-month-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.L5VQXUuY.js","C:/Users/gurpr/lowkeydevs/src/tools/list/extract-pdf-pages/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.OL9LzLSC.js","C:/Users/gurpr/lowkeydevs/src/tools/list/random-date-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.PLcjzRGE.js","C:/Users/gurpr/lowkeydevs/src/tools/list/facebook-font-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.PyCdiDhb.js","C:/Users/gurpr/lowkeydevs/src/tools/list/base64-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.QeepNrY6.js","C:/Users/gurpr/lowkeydevs/src/tools/list/roman-numeral-dates/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.eqRx6G_O.js","C:/Users/gurpr/lowkeydevs/src/tools/list/excel-to-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.gCX9U7C1.js","C:/Users/gurpr/lowkeydevs/src/tools/list/edit-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.gi2lxrTI.js","C:/Users/gurpr/lowkeydevs/src/tools/list/binary-code-translator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.ie4Y1MpG.js","C:/Users/gurpr/lowkeydevs/src/tools/list/find-and-replace-text/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.jMRX7xkK.js","C:/Users/gurpr/lowkeydevs/src/tools/list/png-to-webp/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.jWRMbkHY.js","C:/Users/gurpr/lowkeydevs/src/tools/list/split-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.jzm5sif6.js","C:/Users/gurpr/lowkeydevs/src/tools/list/bubble-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.q8JC-Ixy.js","C:/Users/gurpr/lowkeydevs/src/tools/list/sentence-counter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui.astro_astro_type_script_index_0_lang.uefHp-UB.js","C:/Users/gurpr/lowkeydevs/src/tools/list/jpg-to-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.74slChHw.js","C:/Users/gurpr/lowkeydevs/src/tools/list/merge-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.B-7TmZHm.js","C:/Users/gurpr/lowkeydevs/src/tools/list/json-formatter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.B0YIB0zx.js","C:/Users/gurpr/lowkeydevs/src/tools/list/image-to-ascii/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.BIcZ3Qz5.js","C:/Users/gurpr/lowkeydevs/src/tools/list/nanoid-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.BRDuN5jf.js","C:/Users/gurpr/lowkeydevs/src/tools/list/unlock-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.BT8VSAnL.js","C:/Users/gurpr/lowkeydevs/src/tools/list/whatsapp-font-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.Bo8wAQ9W.js","C:/Users/gurpr/lowkeydevs/src/tools/list/uuid-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.Bt9oHLdy.js","C:/Users/gurpr/lowkeydevs/src/tools/list/webp-to-jpg/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.Bu80t-7k.js","C:/Users/gurpr/lowkeydevs/src/tools/list/word-to-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.BwPrZ2vr.js","C:/Users/gurpr/lowkeydevs/src/tools/list/kebab-case-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.C4DwUeE1.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-to-excel/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.C6F67SFd.js","C:/Users/gurpr/lowkeydevs/src/tools/list/ocr-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.CLQS2SXp.js","C:/Users/gurpr/lowkeydevs/src/tools/list/nato-phonetic-alphabet-translator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.CLwivOep.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-to-word/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.CS5DP05X.js","C:/Users/gurpr/lowkeydevs/src/tools/list/mirror-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.CxW-BtlL.js","C:/Users/gurpr/lowkeydevs/src/tools/list/password-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.CyeO1dZ1.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-to-pdfa/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.D4GToEhU.js","C:/Users/gurpr/lowkeydevs/src/tools/list/jpg-to-png/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DGM4pGaz.js","C:/Users/gurpr/lowkeydevs/src/tools/list/italic-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DNNWytsP.js","C:/Users/gurpr/lowkeydevs/src/tools/list/organize-pdf/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DRVDv3Qo.js","C:/Users/gurpr/lowkeydevs/src/tools/list/image-to-text-ocr/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DRwy8drm.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-to-jpg/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DWrBEOEU.js","C:/Users/gurpr/lowkeydevs/src/tools/list/url-encoder-decoder/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DbD0lQYL.js","C:/Users/gurpr/lowkeydevs/src/tools/list/webp-to-png/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.Dl1ub86f.js","C:/Users/gurpr/lowkeydevs/src/tools/list/unicode-to-text-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.Dn1-Rxap.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-to-powerpoint/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.DuHaNp-X.js","C:/Users/gurpr/lowkeydevs/src/tools/list/online-notepad/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.FJQKCR1t.js","C:/Users/gurpr/lowkeydevs/src/tools/list/jpg-to-webp/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.K2XNn4xS.js","C:/Users/gurpr/lowkeydevs/src/tools/list/json-unstringifier/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.SwChRe0a.js","C:/Users/gurpr/lowkeydevs/src/tools/list/json-stringify-text/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.d5Y3MU42.js","C:/Users/gurpr/lowkeydevs/src/tools/list/online-video-converter/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.pMpy4Yuh.js","C:/Users/gurpr/lowkeydevs/src/tools/list/invisible-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.vCNIUEBu.js","C:/Users/gurpr/lowkeydevs/src/tools/list/wide-text-generator/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.w3box8wD.js","C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-forms/ui.astro?astro&type=script&index=0&lang.ts":"_astro/ui2.astro_astro_type_script_index_0_lang.yKzR3GCl.js","C:/Users/gurpr/lowkeydevs/src/components/SuggestFeatureModal.ts":"_astro/SuggestFeatureModal.C76nxZsr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/gurpr/lowkeydevs/src/pages/index.astro?astro&type=script&index=0&lang.ts","var e=document.getElementById(`hero-search-trigger`),t=document.getElementById(`search-toggle-btn`);e&&t&&e.addEventListener(`click`,()=>{t.click()});var n=document.querySelectorAll(`.tab-btn`),r=document.querySelectorAll(`.tool-card-container`),i=document.getElementById(`filtered-empty`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-selected`,`false`)}),e.classList.add(`active`),e.setAttribute(`aria-selected`,`true`);let t=e.getAttribute(`data-category`),a=0;r.forEach(e=>{let n=e,r=n.getAttribute(`data-tool-category`);t===`all`||r===t?(n.style.display=`flex`,a++):n.style.display=`none`}),i&&(a===0?i.removeAttribute(`hidden`):i.setAttribute(`hidden`,`true`))})});var a=[],o=[],s={};function c(){try{a=JSON.parse(localStorage.getItem(`favorite_tools`)||`[]`),o=JSON.parse(localStorage.getItem(`recent_tools`)||`[]`),s=JSON.parse(localStorage.getItem(`frequent_tools`)||`{}`)}catch(e){console.error(`Error loading toolbox data`,e)}}var l=document.getElementById(`quick-access-section`),u=document.getElementById(`quick-access-grid`),d=document.querySelectorAll(`.quick-tab`);function f(){c(),document.querySelectorAll(`.favorite-btn`).forEach(e=>{let t=e.getAttribute(`data-slug`);t&&(a.includes(t)?(e.classList.add(`active`),e.setAttribute(`aria-label`,`Remove from favorites`)):(e.classList.remove(`active`),e.setAttribute(`aria-label`,`Add to favorites`)))})}function p(){document.addEventListener(`click`,e=>{let t=e.target;if(!t)return;let n=t.closest(`.favorite-btn`);if(!n)return;e.preventDefault(),e.stopPropagation();let r=n.getAttribute(`data-slug`);r&&(c(),a.includes(r)?a=a.filter(e=>e!==r):a.push(r),localStorage.setItem(`favorite_tools`,JSON.stringify(a)),f(),h())})}var m=`favorites`;function h(){c();let e=a.length>0,t=o.length>0,n=Object.keys(s).length>0;if(!e&&!t&&!n){l&&(l.hidden=!0);return}l&&(l.hidden=!1,l.removeAttribute(`hidden`));let r=[];if(m===`favorites`?r=a:m===`recent`?r=o:m===`frequent`&&(r=Object.keys(s).sort((e,t)=>(s[t]||0)-(s[e]||0))),u)if(u.innerHTML=``,r.length===0){let e=``;m===`favorites`?e=`You haven't favorited any tools yet. Click the star on any card to add it here!`:m===`recent`?e=`Your recently visited tools will appear here.`:m===`frequent`&&(e=`Your frequently used tools will appear here.`),u.innerHTML=`\n          <div class=\"quick-empty-state-card\">\n            <p>${e}</p>\n          </div>\n        `}else r.forEach(e=>{let t=document.querySelector(`.tools-grid a[href=\"/tools/${e}\"]`);if(t){let e=t.closest(`.tool-card-wrapper`);if(e){let t=e.cloneNode(!0);u.appendChild(t)}}});f()}d&&d.forEach(e=>{e.addEventListener(`click`,()=>{d.forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-selected`,`false`)}),e.classList.add(`active`),e.setAttribute(`aria-selected`,`true`),m=e.getAttribute(`data-tab`)||`favorites`,h()})}),c(),a.length>0?m=`favorites`:o.length>0?m=`recent`:Object.keys(s).length>0&&(m=`frequent`),d&&d.forEach(e=>{e.getAttribute(`data-tab`)===m?(e.classList.add(`active`),e.setAttribute(`aria-selected`,`true`)):(e.classList.remove(`active`),e.setAttribute(`aria-selected`,`false`))}),f(),p(),h();"],["C:/Users/gurpr/lowkeydevs/src/tools/list/remove-em-dash/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t={replacement:`hyphen`,customValue:``}){if(!e)return``;let n=`-`;return t.replacement===`doubleHyphen`?n=`--`:t.replacement===`space`?n=` `:t.replacement===`empty`?n=``:t.replacement===`custom`&&(n=t.customValue),e.replace(/[\\u2014\\u2013]/g,n)}var t=class extends HTMLElement{textInput;textOutput;replSelect;customContainer;customInput;statCount;btnCopy;connectedCallback(){this.textInput=this.querySelector(`#text-input`),this.textOutput=this.querySelector(`#text-output`),this.replSelect=this.querySelector(`#replacement-select`),this.customContainer=this.querySelector(`#custom-value-container`),this.customInput=this.querySelector(`#custom-input`),this.statCount=this.querySelector(`#stat-count`),this.btnCopy=this.querySelector(`#btn-copy`),this.textInput.addEventListener(`input`,()=>this.handleProcess()),this.replSelect.addEventListener(`change`,()=>{this.replSelect.value===`custom`?this.customContainer.classList.remove(`hidden`):this.customContainer.classList.add(`hidden`),this.handleProcess()}),this.customInput.addEventListener(`input`,()=>this.handleProcess()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy`&&this.handleCopy()})}handleProcess(){let t=this.textInput.value,n=this.replSelect.value,r=this.customInput.value;this.textOutput.value=e(t,{replacement:n,customValue:r});let i=(t.match(/\\u2014/g)||[]).length,a=(t.match(/\\u2013/g)||[]).length;this.statCount.textContent=(i+a).toString()}handleClear(){this.textInput.value=``,this.handleProcess(),this.textInput.focus()}handleLoadSample(){this.textInput.value=`First point—it is crucial—to review the data (2020–2025).`,this.handleProcess()}async handleCopy(){let e=this.textOutput.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`remove-em-dash-tool`)||customElements.define(`remove-em-dash-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/plain-text-converter/ui.astro?astro&type=script&index=0&lang.ts","function e(e){return e.normalize(`NFKD`).replace(/[\\u0300-\\u036f]/g,``)}function t(e){return e.replace(/<style[\\s\\S]*?<\\/style>/gi,``).replace(/<script[\\s\\S]*?<\\/script>/gi,``).replace(/<[^>]+>/g,` `).replace(/&nbsp;/g,` `).replace(/\\s+/g,` `).trim()}function n(e){return e.replace(/^#{1,6}\\s+/gm,``).replace(/[\\*_]{1,3}(.*?)[\\*_]{1,3}/g,`$1`).replace(/\\[(.*?)\\]\\((.*?)\\)/g,`$1`).replace(/!\\[(.*?)\\]\\((.*?)\\)/g,`$1`).replace(/`(.*?)`/g,`$1`).replace(/```[\\s\\S]*?```/g,``).replace(/^\\s*>\\s+/gm,``).replace(/^\\s*[\\-\\*\\+]\\s+/gm,``).replace(/^\\s*\\d+\\.\\s+/gm,``).replace(/^\\s*[\\-\\*_]{3,}\\s*$/gm,``)}function r(r,i){let a=r;i.normalizeUnicode&&(a=e(a)),i.stripHtml&&(a=t(a)),i.stripMarkdown&&(a=n(a));let o=a.split(/\\r?\\n/);if(i.trimLines&&(o=o.map(e=>e.trim())),i.removeDuplicateLines){let e=new Set;o=o.filter(t=>{let n=t.trim();return n?e.has(n)?!1:(e.add(n),!0):!0})}return o.join(`\n`).trim()}var i=class extends HTMLElement{inputEl;outputEl;optStripHtmlEl;optStripMarkdownEl;optNormalizeUnicodeEl;optTrimLinesEl;optRemoveDuplicatesEl;connectedCallback(){this.inputEl=this.querySelector(`#plain-text-input`),this.outputEl=this.querySelector(`#plain-text-output`),this.optStripHtmlEl=this.querySelector(`#opt-strip-html`),this.optStripMarkdownEl=this.querySelector(`#opt-strip-markdown`),this.optNormalizeUnicodeEl=this.querySelector(`#opt-normalize-unicode`),this.optTrimLinesEl=this.querySelector(`#opt-trim-lines`),this.optRemoveDuplicatesEl=this.querySelector(`#opt-remove-duplicates`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`convert`&&this.handleConvert(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>this.handleConvert()),[this.optStripHtmlEl,this.optStripMarkdownEl,this.optNormalizeUnicodeEl,this.optTrimLinesEl,this.optRemoveDuplicatesEl].forEach(e=>e.addEventListener(`change`,()=>this.handleConvert()))}handleConvert(){let e=this.inputEl.value;if(!e){this.outputEl.value=``;return}let t=r(e,{stripHtml:this.optStripHtmlEl.checked,stripMarkdown:this.optStripMarkdownEl.checked,normalizeUnicode:this.optNormalizeUnicodeEl.checked,trimLines:this.optTrimLinesEl.checked,removeDuplicateLines:this.optRemoveDuplicatesEl.checked});this.outputEl.value=t}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.optStripHtmlEl.checked=!0,this.optStripMarkdownEl.checked=!0,this.optNormalizeUnicodeEl.checked=!0,this.optTrimLinesEl.checked=!0,this.optRemoveDuplicatesEl.checked=!1,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`<h1>𝕿𝖍𝖎𝖘 𝕚𝕤 a Heading</h1>\n<p>Here is some <b>HTML text</b> with mathematical 𝓤𝓷𝓲𝓬𝓸𝓭𝓮 symbols.</p>\n# Markdown Title\nAnd here is a **bold markdown** list item:\n- First item\n- First item\n- Second item`,this.handleConvert()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}};customElements.get(`plain-text-converter-tool`)||customElements.define(`plain-text-converter-tool`,i);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/caesar-cipher-tool/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t,n=!1){if(!e)return``;let r=t%26;return n&&(r=(26-r)%26),e.split(``).map(e=>{let t=e.charCodeAt(0);return t>=65&&t<=90?String.fromCharCode((t-65+r)%26+65):t>=97&&t<=122?String.fromCharCode((t-97+r)%26+97):e}).join(``)}var t=class extends HTMLElement{textInput;textOutput;shiftInput;shiftVal;btnCopy;isDecrypt=!1;connectedCallback(){this.textInput=this.querySelector(`#text-input`),this.textOutput=this.querySelector(`#text-output`),this.shiftInput=this.querySelector(`#shift-input`),this.shiftVal=this.querySelector(`#shift-val`),this.btnCopy=this.querySelector(`#btn-copy`),this.textInput.addEventListener(`input`,()=>this.handleCipher()),this.shiftInput.addEventListener(`input`,()=>{this.shiftVal.textContent=this.shiftInput.value,this.handleCipher()});let e=this.querySelectorAll(`.toggle-btn`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-mode`);this.isDecrypt=n===`decrypt`,this.handleCipher()})}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy`&&this.handleCopy()})}handleCipher(){let t=this.textInput.value,n=parseInt(this.shiftInput.value,10);this.textOutput.value=e(t,n,this.isDecrypt)}handleClear(){this.textInput.value=``,this.handleCipher(),this.textInput.focus()}handleLoadSample(){this.textInput.value=this.isDecrypt?`Khoor Zruog! Wklv lv a fdhvdu flskhu vkdsh.`:`Hello World! This is a caesar cipher shape.`,this.handleCipher()}async handleCopy(){let e=this.textOutput.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`caesar-cipher-tool`)||customElements.define(`caesar-cipher-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/hex-to-text-converter/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=` `){if(!e)return``;let n=new TextEncoder().encode(e),r=Array.from(n).map(e=>e.toString(16).padStart(2,`0`));switch(t){case`none`:return r.join(``);case`0x`:return r.map(e=>`0x`+e).join(` `);case`backslash-x`:return r.map(e=>`\\\\x`+e).join(``);case`comma`:return r.join(`,`);default:return r.join(` `)}}function t(e){let t=e.trim();if(!t)return``;if(t=t.replace(/\\\\x|0x|[\\s,:]/g,``),!/^[0-9a-fA-F]*$/.test(t))throw Error(`Invalid hex input. Hexadecimal must only contain characters 0-9 and A-F.`);if(t.length%2!=0)throw Error(`Invalid hex length. Total hexadecimal digits must be an even number.`);let n=[];for(let e=0;e<t.length;e+=2)n.push(parseInt(t.slice(e,e+2),16));try{return new TextDecoder().decode(new Uint8Array(n))}catch{throw Error(`Failed to decode hex bytes into UTF-8 text.`)}}var n=class extends HTMLElement{inputEl;outputEl;inputPaneTitle;outputPaneTitle;separatorGroupEl;separatorSelectEl;errorBannerEl;errorMessageEl;mode=`encode`;connectedCallback(){this.inputEl=this.querySelector(`#converter-input`),this.outputEl=this.querySelector(`#converter-output`),this.inputPaneTitle=this.querySelector(`#input-pane-title`),this.outputPaneTitle=this.querySelector(`#output-pane-title`),this.separatorGroupEl=this.querySelector(`#separator-group`),this.separatorSelectEl=this.querySelector(`#hex-separator-select`),this.errorBannerEl=this.querySelector(`#converter-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample();let r=t.getAttribute(`data-mode`);r&&this.setMode(r)}),this.inputEl.addEventListener(`input`,()=>this.processConversion()),this.separatorSelectEl.addEventListener(`change`,()=>this.processConversion())}setMode(e){if(this.mode===e)return;this.mode=e,this.querySelectorAll(`.toggle-btn`).forEach(t=>{t.getAttribute(`data-mode`)===e?(t.classList.add(`active`),t.setAttribute(`aria-checked`,`true`)):(t.classList.remove(`active`),t.setAttribute(`aria-checked`,`false`))}),e===`encode`?(this.inputPaneTitle.textContent=`Plain Text Input`,this.outputPaneTitle.textContent=`Hex Output`,this.inputEl.placeholder=`Type or paste content here...`,this.outputEl.placeholder=`Hex output will appear here...`,this.separatorGroupEl.style.display=`flex`):(this.inputPaneTitle.textContent=`Hex Input`,this.outputPaneTitle.textContent=`Plain Text Output`,this.inputEl.placeholder=`Paste Hex string here...`,this.outputEl.placeholder=`Plain text output will appear here...`,this.separatorGroupEl.style.display=`none`);let t=this.inputEl.value,n=this.outputEl.value;this.inputEl.value=n,this.outputEl.value=t,this.processConversion()}processConversion(){let n=this.inputEl.value;if(!n){this.clearOutput();return}try{if(this.mode===`encode`){let t=this.separatorSelectEl.value,r=e(n,t);this.outputEl.value=r}else{let e=t(n);this.outputEl.value=e}this.hideError()}catch(e){this.showError(e.message||`Error occurred during processing.`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){this.mode===`encode`?this.inputEl.value=`Hex values are awesome! 🚀`:this.inputEl.value=`48 65 78 20 76 61 6c 75 65 73 20 61 72 65 20 61 77 65 73 6f 6d 65 21 20 f0 9f 9a 80`,this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}clearOutput(){this.outputEl.value=``,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.value=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`hex-converter-tool`)||customElements.define(`hex-converter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/sort-words-alphabetically/ui.astro?astro&type=script&index=0&lang.ts","function e(e){return e.replace(/^[^a-zA-Z0-9\\s]+|[^a-zA-Z0-9\\s]+$/g,``)}function t(t,n){if(!t)return``;let r=` `,i=` `;switch(n.separator){case`comma`:r=/,/,i=`, `;break;case`newline`:r=/\\r?\\n/,i=`\n`;break;case`tab`:r=/\\t/,i=`\t`;break;case`custom`:r=n.customSeparator||` `,i=n.customSeparator||` `;break;default:r=/\\s+/,i=` `;break}let a=t.split(r).map(e=>e.trim()).filter(e=>e.length>0);if(n.removeDuplicates){let e=new Set;a=a.filter(t=>{let r=n.caseSensitive?t:t.toLowerCase();return e.has(r)?!1:(e.add(r),!0)})}let o=new Intl.Collator(void 0,{numeric:!0,sensitivity:n.caseSensitive?`variant`:`base`,caseFirst:n.caseSensitive?`upper`:`false`});return a.sort((t,r)=>{let i=t,a=r;if(n.ignorePunctuation&&(i=e(t),a=e(r)),!i&&a)return-1;if(i&&!a)return 1;if(!i&&!a)return 0;let s=o.compare(i,a);return s===0&&n.caseSensitive&&(s=t<r?-1:+(t>r)),n.order===`asc`?s:-s}),a.join(i)}var n=class extends HTMLElement{inputEl;outputEl;separatorEl;customSeparatorGroupEl;customSeparatorEl;orderEl;caseEl;uniqEl;punctEl;connectedCallback(){this.inputEl=this.querySelector(`#sort-words-input`),this.outputEl=this.querySelector(`#sort-words-output`),this.separatorEl=this.querySelector(`#sort-separator`),this.customSeparatorGroupEl=this.querySelector(`#custom-separator-group`),this.customSeparatorEl=this.querySelector(`#custom-separator`),this.orderEl=this.querySelector(`#sort-order`),this.caseEl=this.querySelector(`#opt-case`),this.uniqEl=this.querySelector(`#opt-uniq`),this.punctEl=this.querySelector(`#opt-punct`),[this.inputEl,this.customSeparatorEl].forEach(e=>e.addEventListener(`input`,()=>this.handleSort())),[this.orderEl,this.caseEl,this.uniqEl,this.punctEl].forEach(e=>e.addEventListener(`change`,()=>this.handleSort())),this.separatorEl.addEventListener(`change`,()=>{this.separatorEl.value===`custom`?this.customSeparatorGroupEl.style.display=`flex`:this.customSeparatorGroupEl.style.display=`none`,this.handleSort()}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`sort`&&this.handleSort(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()})}handleSort(){let e=this.inputEl.value;if(!e){this.outputEl.value=``;return}let n=t(e,{order:this.orderEl.value,separator:this.separatorEl.value,customSeparator:this.customSeparatorEl.value,caseSensitive:this.caseEl.checked,removeDuplicates:this.uniqEl.checked,ignorePunctuation:this.punctEl.checked});this.outputEl.value=n}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.separatorEl.value=`newline`,this.customSeparatorGroupEl.style.display=`none`,this.customSeparatorEl.value=``,this.orderEl.value=`asc`,this.caseEl.checked=!1,this.uniqEl.checked=!1,this.punctEl.checked=!0,this.inputEl.focus()}handleLoadSample(){this.separatorEl.value=`newline`,this.customSeparatorGroupEl.style.display=`none`,this.inputEl.value=`Banana\nApple\nCherry\nOrange\napple\nBanana\nGrape`,this.handleSort()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`sort-words-tool`)||customElements.define(`sort-words-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/css-formatter/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){let n=e.trim();if(!n)return``;let r=t===`tab`?`\t`:` `.repeat(Number(t)),i=0,a=``,o=n.replace(/\\/\\*[\\s\\S]*?\\*\\//g,``).replace(/\\s+/g,` `).trim();for(let e=0;e<o.length;e++){let t=o[e];if(t===`{`)a=a.trimEnd(),a+=` {\n`+r.repeat(++i);else if(t===`}`)i=Math.max(0,i-1),a=a.trimEnd(),a+=`\n`+r.repeat(i)+`}\n\n`+r.repeat(i);else if(t===`;`)a+=`;\n`+r.repeat(i);else if(t===`:`)a+=`: `;else if(t===`,`)a+=`, `;else{if(t===` `&&a.endsWith(` `))continue;a+=t}}return a.split(`\n`).map(e=>e.trimEnd()).join(`\n`).replace(/\\n{3,}/g,`\n\n`).trim()}function t(e){let t=e.trim();return t?t.replace(/\\/\\*[\\s\\S]*?\\*\\//g,``).replace(/\\s+/g,` `).replace(/\\s*([\\{\\};:,])\\s*/g,`$1`).replace(/;}/g,`}`).trim():``}var n=class extends HTMLElement{inputEl;outputEl;indentSelectEl;connectedCallback(){this.inputEl=this.querySelector(`#css-input`),this.outputEl=this.querySelector(`#css-output`),this.indentSelectEl=this.querySelector(`#css-indent-select`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`format`&&this.handleFormat(),n===`minify`&&this.handleMinify(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>this.handleFormat(!0)),this.indentSelectEl.addEventListener(`change`,()=>this.handleFormat())}handleFormat(t=!1){let n=this.inputEl.value;if(!n.trim()){this.outputEl.textContent=``;return}try{let t=this.indentSelectEl.value,r=e(n,t);this.outputEl.textContent=r}catch(e){t||(this.outputEl.textContent=`Error: ${e.message}`)}}handleMinify(){let e=this.inputEl.value;if(e.trim())try{let n=t(e);this.outputEl.textContent=n}catch(e){this.outputEl.textContent=`Error: ${e.message}`}}handleClear(){this.inputEl.value=``,this.outputEl.textContent=``,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`/* Styled Card Element */\n.card-container { display: flex; flex-direction: column; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; transition: transform 0.2s ease; }\n.card-container:hover { transform: translateY(-2px); border-color: var(--border-hover); }\n.card-title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem; }\n.card-desc { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; }`,this.handleFormat()}async handleCopy(){let e=this.outputEl.textContent;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`css-formatter-tool`)||customElements.define(`css-formatter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/repeat-text-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t){if(!e)return``;let n=Math.max(1,Math.min(1e4,t.count)),r=``;switch(t.separator){case`space`:r=` `;break;case`comma`:r=`, `;break;case`newline`:r=`\n`;break;case`tab`:r=`\t`;break;case`custom`:r=t.customSeparator;break;default:r=``;break}if(t.prependIndex){let t=[];for(let r=1;r<=n;r++)t.push(`${r}. ${e}`);return t.join(r)}return Array(n).fill(e).join(r)}var t=class extends HTMLElement{inputEl;outputEl;countEl;separatorEl;customSeparatorGroupEl;customSeparatorEl;indexEl;connectedCallback(){this.inputEl=this.querySelector(`#repeat-input`),this.outputEl=this.querySelector(`#repeat-output`),this.countEl=this.querySelector(`#repeat-count`),this.separatorEl=this.querySelector(`#repeat-separator`),this.customSeparatorGroupEl=this.querySelector(`#custom-separator-group`),this.customSeparatorEl=this.querySelector(`#custom-separator`),this.indexEl=this.querySelector(`#opt-index`),this.inputEl.addEventListener(`input`,()=>this.handleRepeat()),this.countEl.addEventListener(`input`,()=>this.handleRepeat()),this.customSeparatorEl.addEventListener(`input`,()=>this.handleRepeat()),this.indexEl.addEventListener(`change`,()=>this.handleRepeat()),this.separatorEl.addEventListener(`change`,()=>{this.separatorEl.value===`custom`?this.customSeparatorGroupEl.style.display=`flex`:this.customSeparatorGroupEl.style.display=`none`,this.handleRepeat()}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`repeat`&&this.handleRepeat(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()})}handleRepeat(){let t=this.inputEl.value;if(!t){this.outputEl.value=``;return}let n=e(t,{count:parseInt(this.countEl.value)||10,separator:this.separatorEl.value,customSeparator:this.customSeparatorEl.value,prependIndex:this.indexEl.checked});this.outputEl.value=n}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.countEl.value=`10`,this.separatorEl.value=`newline`,this.customSeparatorGroupEl.style.display=`none`,this.customSeparatorEl.value=``,this.indexEl.checked=!1,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`Lowkeydevs Rocks!`,this.countEl.value=`5`,this.separatorEl.value=`newline`,this.indexEl.checked=!0,this.handleRepeat()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`repeat-text-tool`)||customElements.define(`repeat-text-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-ip-address-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{type:t,quantity:n}=e,r=[],i=()=>{if(typeof globalThis<`u`&&globalThis.crypto){let e=new Uint8Array(1);return globalThis.crypto.getRandomValues(e),e[0]}return Math.floor(Math.random()*256)},a=()=>{if(typeof globalThis<`u`&&globalThis.crypto){let e=new Uint16Array(1);return globalThis.crypto.getRandomValues(e),e[0].toString(16)}return Math.floor(Math.random()*65536).toString(16)};for(let e=0;e<n;e++)if(t===`ipv4`){let e=[i(),i(),i(),i()];r.push(e.join(`.`))}else{let e=[a(),a(),a(),a(),a(),a(),a(),a()];r.push(e.join(`:`))}return r}var t=class extends HTMLElement{qtyInput;outputEl;btnGenerate;btnCopy;ipType=`ipv4`;connectedCallback(){this.qtyInput=this.querySelector(`#ip-qty`),this.outputEl=this.querySelector(`#ip-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate());let e=this.querySelectorAll(`.toggle-btn`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),this.ipType=t.getAttribute(`data-type`),this.handleGenerate()})}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let t=parseInt(this.qtyInput.value,10),n=this.ipType;if(isNaN(t)){this.outputEl.value=`Please enter a valid quantity.`;return}let r=e({type:n,quantity:t});this.outputEl.value=r.join(`\n`)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy IPs`,e)}}};customElements.get(`rand-ip-tool`)||customElements.define(`rand-ip-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/remove-underscores/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t={replacement:`space`,customValue:``}){if(!e)return``;let n=` `;return t.replacement===`hyphen`?n=`-`:t.replacement===`empty`?n=``:t.replacement===`custom`&&(n=t.customValue),e.replace(/_/g,n)}var t=class extends HTMLElement{textInput;textOutput;replSelect;customContainer;customInput;statCount;btnCopy;connectedCallback(){this.textInput=this.querySelector(`#text-input`),this.textOutput=this.querySelector(`#text-output`),this.replSelect=this.querySelector(`#replacement-select`),this.customContainer=this.querySelector(`#custom-value-container`),this.customInput=this.querySelector(`#custom-input`),this.statCount=this.querySelector(`#stat-count`),this.btnCopy=this.querySelector(`#btn-copy`),this.textInput.addEventListener(`input`,()=>this.handleProcess()),this.replSelect.addEventListener(`change`,()=>{this.replSelect.value===`custom`?this.customContainer.classList.remove(`hidden`):this.customContainer.classList.add(`hidden`),this.handleProcess()}),this.customInput.addEventListener(`input`,()=>this.handleProcess()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy`&&this.handleCopy()})}handleProcess(){let t=this.textInput.value,n=this.replSelect.value,r=this.customInput.value;this.textOutput.value=e(t,{replacement:n,customValue:r});let i=(t.match(/_/g)||[]).length;this.statCount.textContent=i.toString()}handleClear(){this.textInput.value=``,this.handleProcess(),this.textInput.focus()}handleLoadSample(){this.textInput.value=`hello_world_variable\nuser_first_name\nAPI_ENDPOINT_URL`,this.handleProcess()}async handleCopy(){let e=this.textOutput.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`remove-underscores-tool`)||customElements.define(`remove-underscores-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/html-to-markdown-converter/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let t={type:`tag`,name:`root`,children:[]},n=t,r=[t],i=/<(\\/?)([a-zA-Z1-6]+)([^>]*?)>/g,a=0,o;for(;(o=i.exec(e))!==null;){let s=e.slice(a,o.index);s&&n.children.push({type:`text`,text:s});let c=o[1]===`/`,l=o[2].toLowerCase(),u=o[3];if(c){let e=r.map(e=>e.name).lastIndexOf(l);e!==-1&&(r.splice(e),n=r[r.length-1]||t)}else{let e={},t=/([a-zA-Z-]+)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s>]+))/g,i;for(;(i=t.exec(u))!==null;)e[i[1].toLowerCase()]=i[2]||i[3]||i[4]||``;let a={type:`tag`,name:l,attrs:e,children:[]};n.children.push(a),u.endsWith(`/`)||[`br`,`img`,`hr`,`input`,`meta`,`link`].includes(l)||(r.push(a),n=a)}a=i.lastIndex}let s=e.slice(a);return s&&n.children.push({type:`text`,text:s}),t.children}function t(e,r={}){let i=``;for(let a of e)if(a.type===`text`){let e=a.text||``;e=e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`).replace(/&quot;/g,`\"`).replace(/&#39;/g,`'`).replace(/&nbsp;/g,` `),i+=e}else if(a.type===`tag`){let e=a.name;if(e===`style`||e===`script`)continue;let o=t(a.children||[],r);switch(e){case`h1`:i+=`\\n\\n# ${o.trim()}\\n\\n`;break;case`h2`:i+=`\\n\\n## ${o.trim()}\\n\\n`;break;case`h3`:i+=`\\n\\n### ${o.trim()}\\n\\n`;break;case`h4`:i+=`\\n\\n#### ${o.trim()}\\n\\n`;break;case`h5`:i+=`\\n\\n##### ${o.trim()}\\n\\n`;break;case`h6`:i+=`\\n\\n###### ${o.trim()}\\n\\n`;break;case`p`:i+=`\\n\\n${o.trim()}\\n\\n`;break;case`strong`:case`b`:i+=`**${o}**`;break;case`em`:case`i`:i+=`*${o}*`;break;case`code`:i+=`\\`${o}\\``;break;case`pre`:{let e=n(a.children||[]);i+=`\\n\\n\\`\\`\\`\\n${e.trim()}\\n\\`\\`\\`\\n\\n`;break}case`blockquote`:i+=`\\n\\n> ${o.trim().replace(/\\n/g,`\n> `)}\\n\\n`;break;case`br`:i+=`\n`;break;case`hr`:i+=`\n\n---\n\n`;break;case`a`:{let e=a.attrs?.href||``;i+=`[${o}](${e})`;break}case`img`:{let e=a.attrs?.src||``,t=a.attrs?.alt||``;i+=`![${t}](${e})`;break}case`ul`:i+=`\\n\\n${t(a.children||[],{listType:`ul`}).trim()}\\n\\n`;break;case`ol`:i+=`\\n\\n${t(a.children||[],{listType:`ol`,listIndex:1}).trim()}\\n\\n`;break;case`li`:if(r.listType===`ol`){let e=r.listIndex||1;i+=`\\n${e}. ${o.trim()}`,r.listIndex=e+1}else i+=`\\n- ${o.trim()}`;break;default:i+=o}}return i}function n(e){let t=``;for(let r of e)r.type===`text`?t+=r.text:r.type===`tag`&&(t+=n(r.children||[]));return t}function r(n){return n.trim()?t(e(n)).replace(/\\n{3,}/g,`\n\n`).trim():``}var i=class extends HTMLElement{inputEl;outputEl;connectedCallback(){this.inputEl=this.querySelector(`#html-input`),this.outputEl=this.querySelector(`#markdown-output`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>this.processConversion())}processConversion(){let e=this.inputEl.value;if(!e){this.outputEl.value=``;return}let t=r(e);this.outputEl.value=t}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`<h1>Astro Framework</h1>\n<p>Astro is the web framework for building <strong>content-driven websites</strong>.</p>\n<blockquote>Astro builds fast websites, faster.</blockquote>\n<p>Here are some benefits:</p>\n<ul>\n  <li>Zero JS by default</li>\n  <li>Server-first API design</li>\n  <li>Customizable island architecture</li>\n</ul>\n<p>Code example:</p>\n<pre><code>const name = \"Astro\";\nconsole.log(\\`Hello \\${name}\\`);</code></pre>\n<p>Learn more at <a href=\"https://astro.build\">astro.build</a>.</p>`,this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}};customElements.get(`html-to-markdown-tool`)||customElements.define(`html-to-markdown-tool`,i);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/character-remover/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t){if(!e)return``;let n=e;if(t.removeLetters&&(n=n.replace(/[a-zA-Z]/g,``)),t.removeNumbers&&(n=n.replace(/[0-9]/g,``)),t.removePunctuation&&(n=n.replace(/[!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~]/g,``)),t.customChars){let e=t.customChars.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g,`\\\\$&`),r=t.caseSensitive?`g`:`gi`,i=RegExp(`[${e}]`,r);n=n.replace(i,``)}return t.removeWhitespace&&(n=n.replace(/[ \\t]/g,``)),t.removeNewlines&&(n=n.replace(/[\\r\\n]+/g,``)),n}var t=class extends HTMLElement{inputEl;outputEl;optLettersEl;optNumbersEl;optPunctuationEl;optWhitespaceEl;optNewlinesEl;optCustomCharsEl;optCaseSensitiveEl;connectedCallback(){this.inputEl=this.querySelector(`#char-remover-input`),this.outputEl=this.querySelector(`#char-remover-output`),this.optLettersEl=this.querySelector(`#opt-letters`),this.optNumbersEl=this.querySelector(`#opt-numbers`),this.optPunctuationEl=this.querySelector(`#opt-punctuation`),this.optWhitespaceEl=this.querySelector(`#opt-whitespace`),this.optNewlinesEl=this.querySelector(`#opt-newlines`),this.optCustomCharsEl=this.querySelector(`#opt-custom-chars`),this.optCaseSensitiveEl=this.querySelector(`#opt-case-sensitive`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`remove`&&this.handleClean(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),[this.inputEl,this.optCustomCharsEl].forEach(e=>e.addEventListener(`input`,()=>this.handleClean())),[this.optLettersEl,this.optNumbersEl,this.optPunctuationEl,this.optWhitespaceEl,this.optNewlinesEl,this.optCaseSensitiveEl].forEach(e=>e.addEventListener(`change`,()=>this.handleClean()))}handleClean(){let t=this.inputEl.value;if(!t){this.outputEl.value=``;return}let n=e(t,{removeLetters:this.optLettersEl.checked,removeNumbers:this.optNumbersEl.checked,removePunctuation:this.optPunctuationEl.checked,removeWhitespace:this.optWhitespaceEl.checked,removeNewlines:this.optNewlinesEl.checked,customChars:this.optCustomCharsEl.value,caseSensitive:this.optCaseSensitiveEl.checked});this.outputEl.value=n}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.optLettersEl.checked=!1,this.optNumbersEl.checked=!1,this.optPunctuationEl.checked=!1,this.optWhitespaceEl.checked=!1,this.optNewlinesEl.checked=!1,this.optCustomCharsEl.value=``,this.optCaseSensitiveEl.checked=!0,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`Hey there! My email address is contact_123@Lowkeydevs.com. The telephone number is +1-555-0199.`,this.optLettersEl.checked=!1,this.optNumbersEl.checked=!0,this.optPunctuationEl.checked=!0,this.handleClean()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}};customElements.get(`character-remover-tool`)||customElements.define(`character-remover-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/remove-duplicate-lines/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t){if(!e)return``;let n=e.split(/\\r?\\n/),r=new Map;t.behavior===`remove-all`&&n.forEach(e=>{let n=e.trim();if(t.ignoreEmptyLines&&n===``)return;let i=t.caseSensitive?e:e.toLowerCase();r.set(i,(r.get(i)||0)+1)});let i=new Map;t.behavior===`keep-last`&&n.forEach((e,n)=>{let r=e.trim();if(t.ignoreEmptyLines&&r===``)return;let a=t.caseSensitive?e:e.toLowerCase();i.set(a,n)});let a=new Set,o=n.filter((e,n)=>{let o=e.trim();if(t.ignoreEmptyLines&&o===``)return!0;let s=t.caseSensitive?e:e.toLowerCase();return t.behavior===`remove-all`?(r.get(s)||0)<=1:t.behavior===`keep-last`?i.get(s)===n:a.has(s)?!1:(a.add(s),!0)});if(t.sortOutput){let e=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});o.sort((t,n)=>t.trim()===``&&n.trim()!==``?-1:t.trim()!==``&&n.trim()===``?1:e.compare(t,n))}return o.join(`\n`)}var t=class extends HTMLElement{inputEl;outputEl;behaviorEl;caseEl;emptyEl;sortEl;connectedCallback(){this.inputEl=this.querySelector(`#dedupe-input`),this.outputEl=this.querySelector(`#dedupe-output`),this.behaviorEl=this.querySelector(`#dedupe-behavior`),this.caseEl=this.querySelector(`#opt-case`),this.emptyEl=this.querySelector(`#opt-empty`),this.sortEl=this.querySelector(`#opt-sort`),this.inputEl.addEventListener(`input`,()=>this.handleDedupe()),[this.behaviorEl,this.caseEl,this.emptyEl,this.sortEl].forEach(e=>e.addEventListener(`change`,()=>this.handleDedupe())),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`dedupe`&&this.handleDedupe(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()})}handleDedupe(){let t=this.inputEl.value;if(!t){this.outputEl.value=``;return}let n=e(t,{caseSensitive:this.caseEl.checked,behavior:this.behaviorEl.value,ignoreEmptyLines:this.emptyEl.checked,sortOutput:this.sortEl.checked});this.outputEl.value=n}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.behaviorEl.value=`keep-first`,this.caseEl.checked=!1,this.emptyEl.checked=!0,this.sortEl.checked=!1,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`Apple\nBanana\nOrange\nApple\n\nBanana\nGrape\nOrange\nPear`,this.handleDedupe()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`remove-duplicate-lines-tool`)||customElements.define(`remove-duplicate-lines-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/pig-latin-translator/ui.astro?astro&type=script&index=0&lang.ts","var e=new Set([`a`,`e`,`i`,`o`,`u`]);function t(t){if(!t)return``;if(!/^[a-zA-Z]+$/.test(t))return t;let n=t[0]===t[0].toUpperCase()&&t.length>0,r=t.toLowerCase(),i=``;if(e.has(r[0]))i=r+`way`;else{let t=-1;for(let n=0;n<r.length;n++)if(e.has(r[n])||r[n]===`y`&&n>0){t=n;break}if(t===-1)i=r+`ay`;else{let e=r.slice(0,t);i=r.slice(t)+e+`ay`}}return n&&i.length>0&&(i=i[0].toUpperCase()+i.slice(1)),i}function n(t){if(!t)return``;if(!/^[a-zA-Z]+$/.test(t))return t;let n=t[0]===t[0].toUpperCase()&&t.length>0,r=t.toLowerCase(),i=``;if(r.endsWith(`way`)){let e=r.slice(0,-3);i=e===`orld`?`world`:e===`ork`?`work`:e}else if(r.endsWith(`ay`)){let t=r.slice(0,-2),n=t.length-1;for(;n>=0&&!(e.has(t[n])||t[n]===`y`&&n>0);)n--;i=t.slice(n+1)+t.slice(0,n+1)}else i=r;return n&&i.length>0&&(i=i[0].toUpperCase()+i.slice(1)),i}function r(e,r=!0){return e?e.replace(/([a-zA-Z]+)/g,e=>r?t(e):n(e)):``}var i=class extends HTMLElement{textInput;textOutput;btnCopy;toPigLatin=!0;connectedCallback(){this.textInput=this.querySelector(`#text-input`),this.textOutput=this.querySelector(`#text-output`),this.btnCopy=this.querySelector(`#btn-copy`),this.textInput.addEventListener(`input`,()=>this.handleTranslate());let e=this.querySelectorAll(`.toggle-btn`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-mode`);this.toPigLatin=n===`to-piglatin`,this.handleTranslate()})}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy`&&this.handleCopy()})}handleTranslate(){let e=this.textInput.value;this.textOutput.value=r(e,this.toPigLatin)}handleClear(){this.textInput.value=``,this.handleTranslate(),this.textInput.focus()}handleLoadSample(){this.textInput.value=this.toPigLatin?`Hello, friend! Pig Latin is a secret language game.`:`Ellohay, iendfray! Igpay Atinlay isway away ecretsay anguagelay amegay.`,this.handleTranslate()}async handleCopy(){let e=this.textOutput.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`piglatin-translator-tool`)||customElements.define(`piglatin-translator-tool`,i);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/graphql-formatter/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){let n=e.trim();if(!n)return``;let r=t===`tab`?`\t`:` `.repeat(Number(t)),i=0,a=``,o=n.split(`\n`),s=[];for(let e of o){if(e=e.trim(),!e)continue;if(e.startsWith(`#`)){s.push(e);continue}let t=/({|}|\\(|\\)|:|@|,|\"(?:\\\\\"|[^\"])*\"|[^\\{\\}\\(\\):@,\\s]+)/g,n;for(;(n=t.exec(e))!==null;)s.push(n[0])}let c=0;for(let e=0;e<s.length;e++){let t=s[e],n=s[e-1],o=s[e+1];if(t.startsWith(`#`)){a+=`\n`+r.repeat(i)+t+`\n`+r.repeat(i);continue}t===`{`?(a=a.trimEnd(),a+=` {\n`,i++,a+=r.repeat(i)):t===`}`?(i=Math.max(0,i-1),a=a.trimEnd(),a+=`\n`+r.repeat(i)+`}\n`+r.repeat(i)):t===`(`?(c++,a+=`(`):t===`)`?(c--,a+=`)`):t===`:`?a+=`: `:t===`,`?a+=`, `:(i>0&&c===0&&n&&n!==`{`&&n!==`(`&&n!==`:`&&n!==`,`&&n!==`@`&&(a=a.trimEnd(),a+=`\n`+r.repeat(i)),a+=t,o&&o!==`}`&&o!==`{`&&o!==`)`&&o!==`:`&&o!==`,`&&o!==`(`&&(a+=` `))}return a.split(`\n`).map(e=>e.trimEnd()).filter((e,t,n)=>e!==``||n[t-1]!==``&&t>0).join(`\n`).trim()}function t(e){let t=e.trim();return t?t.split(`\n`).map(e=>e.trim()).filter(e=>e&&!e.startsWith(`#`)).join(` `).replace(/\\s+/g,` `).replace(/\\s*([\\{\\}\\(\\):,])\\s*/g,`$1`).trim():``}var n=class extends HTMLElement{inputEl;outputEl;indentSelectEl;connectedCallback(){this.inputEl=this.querySelector(`#graphql-input`),this.outputEl=this.querySelector(`#graphql-output`),this.indentSelectEl=this.querySelector(`#graphql-indent-select`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`format`&&this.handleFormat(),n===`minify`&&this.handleMinify(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>this.handleFormat(!0)),this.indentSelectEl.addEventListener(`change`,()=>this.handleFormat())}handleFormat(t=!1){let n=this.inputEl.value;if(!n.trim()){this.outputEl.textContent=``;return}try{let t=this.indentSelectEl.value,r=e(n,t);this.outputEl.textContent=r}catch(e){t||(this.outputEl.textContent=`Error: ${e.message}`)}}handleMinify(){let e=this.inputEl.value;if(e.trim())try{let n=t(e);this.outputEl.textContent=n}catch(e){this.outputEl.textContent=`Error: ${e.message}`}}handleClear(){this.inputEl.value=``,this.outputEl.textContent=``,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`# Fetch repositories and user profile info\nquery GetUserRepos($username: String!, $limit: Int = 10) {\n  user(login: $username) {\n    name\n    bio\n    avatarUrl\n    repositories(first: $limit, orderBy: {field: CREATED_AT, direction: DESC}) {\n      nodes {\n        id\n        name\n        description\n        stargazerCount\n        forkCount\n      }\n    }\n  }\n}`,this.handleFormat()}async handleCopy(){let e=this.outputEl.textContent;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`graphql-formatter-tool`)||customElements.define(`graphql-formatter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-password-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{length:t,quantity:n,uppercase:r,lowercase:i,numbers:a,symbols:o,excludeSimilar:s,excludeAmbiguous:c}=e,l=`abcdefghijklmnopqrstuvwxyz`,u=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,d=`0123456789`,f=`!@#$%^&*()_+-=[]{}|;:,.<>?`;s&&(l=l.replace(/[l|o]/g,``),u=u.replace(/[I|O]/g,``),d=d.replace(/[0|1]/g,``),f=f.replace(/[|]/g,``)),c&&(f=f.replace(/[{}[\\]()/\\/'\"`~,;:.<>]/g,``));let p=``;if(i&&(p+=l),r&&(p+=u),a&&(p+=d),o&&(p+=f),!p)return[];let m=[],h=()=>{if(typeof globalThis<`u`&&globalThis.crypto){let e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]/4294967296}return Math.random()};for(let e=0;e<n;e++){let e=``,n=[];i&&l&&n.push(l[Math.floor(h()*l.length)]),r&&u&&n.push(u[Math.floor(h()*u.length)]),a&&d&&n.push(d[Math.floor(h()*d.length)]),o&&f&&n.push(f[Math.floor(h()*f.length)]);for(let r=0;r<t;r++)r<n.length?e+=n[r]:e+=p[Math.floor(h()*p.length)];let s=e.split(``);for(let e=s.length-1;e>0;e--){let t=Math.floor(h()*(e+1));[s[e],s[t]]=[s[t],s[e]]}m.push(s.join(``))}return m}var t=class extends HTMLElement{lenSlider;qtySlider;lenVal;qtyVal;optLower;optUpper;optNumbers;optSymbols;optSimilar;optAmbiguous;outputEl;btnGenerate;btnCopy;connectedCallback(){this.lenSlider=this.querySelector(`#pwd-length`),this.qtySlider=this.querySelector(`#pwd-qty`),this.lenVal=this.querySelector(`#length-val`),this.qtyVal=this.querySelector(`#qty-val`),this.optLower=this.querySelector(`#opt-lower`),this.optUpper=this.querySelector(`#opt-upper`),this.optNumbers=this.querySelector(`#opt-numbers`),this.optSymbols=this.querySelector(`#opt-symbols`),this.optSimilar=this.querySelector(`#opt-similar`),this.optAmbiguous=this.querySelector(`#opt-ambiguous`),this.outputEl=this.querySelector(`#pwd-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.lenSlider.addEventListener(`input`,()=>{this.lenVal.textContent=this.lenSlider.value}),this.qtySlider.addEventListener(`input`,()=>{this.qtyVal.textContent=this.qtySlider.value}),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let t=parseInt(this.lenSlider.value,10),n=parseInt(this.qtySlider.value,10),r=this.optUpper.checked,i=this.optLower.checked,a=this.optNumbers.checked,o=this.optSymbols.checked,s=this.optSimilar.checked,c=this.optAmbiguous.checked;if(!r&&!i&&!a&&!o){this.outputEl.value=`Please select at least one character set.`;return}let l=e({length:t,quantity:n,uppercase:r,lowercase:i,numbers:a,symbols:o,excludeSimilar:s,excludeAmbiguous:c});this.outputEl.value=l.join(`\n`)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy passwords`,e)}}};customElements.get(`rand-pwd-tool`)||customElements.define(`rand-pwd-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-choice-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{choices:t,quantity:n,allowDuplicates:r}=e,i=t.map(e=>e.trim()).filter(e=>e.length>0);if(i.length===0)return[];let a=n;!r&&a>i.length&&(a=i.length);let o=[],s=[...i],c=e=>{if(typeof globalThis<`u`&&globalThis.crypto){let t=new Uint32Array(1);return globalThis.crypto.getRandomValues(t),Math.floor(t[0]/4294967296*e)}return Math.floor(Math.random()*e)};for(let e=0;e<a;e++){let e=c(s.length);o.push(s[e]),r||s.splice(e,1)}return o}var t=class extends HTMLElement{choicesInput;qtyInput;dupCheckbox;winnerOutput;btnPick;connectedCallback(){this.choicesInput=this.querySelector(`#choices-input`),this.qtyInput=this.querySelector(`#choice-qty`),this.dupCheckbox=this.querySelector(`#opt-dup`),this.winnerOutput=this.querySelector(`#winner-output`),this.btnPick=this.querySelector(`#btn-pick`),this.btnPick.addEventListener(`click`,()=>this.handlePick()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`load-sample`&&this.handleLoadSample()})}handlePick(){let t=this.choicesInput.value.split(`\n`).map(e=>e.trim()).filter(e=>e.length>0),n=parseInt(this.qtyInput.value,10),r=this.dupCheckbox.checked;if(t.length===0){this.winnerOutput.textContent=`Please enter options first.`;return}this.winnerOutput.textContent=`Selecting...`,this.winnerOutput.classList.add(`pop`),setTimeout(()=>{let i=e({choices:t,quantity:n,allowDuplicates:r});this.winnerOutput.innerHTML=i.map(e=>`<div>${this.escapeHtml(e)}</div>`).join(``),this.winnerOutput.classList.remove(`pop`)},300)}escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}handleLoadSample(){this.choicesInput.value=`Pizza🍕\nSushi🍣\nTacos🌮\nBurgers🍔\nSalad🥗`}};customElements.get(`rand-choice-tool`)||customElements.define(`rand-choice-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/png-to-jpg/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fromType;toType;toExt;fileInputEl;dropzoneEl;idleStateEl;previewStateEl;previewImgEl;sourceNameEl;sourceSizeEl;removeBtn;actionsEl;convertBtn;resultsEl;statsOrigSizeEl;statsConvSizeEl;downloadBtn;selectedFile=null;convertedBlob=null;connectedCallback(){this.fromType=this.getAttribute(`data-from`)||`image/png`,this.toType=this.getAttribute(`data-to`)||`image/jpeg`,this.toExt=this.getAttribute(`data-ext`)||`jpg`,this.fileInputEl=this.querySelector(`#conv-file-input`),this.dropzoneEl=this.querySelector(`#conv-dropzone`),this.idleStateEl=this.querySelector(`#conv-idle-state`),this.previewStateEl=this.querySelector(`#conv-preview-state`),this.previewImgEl=this.querySelector(`#conv-preview-img`),this.sourceNameEl=this.querySelector(`#source-name`),this.sourceSizeEl=this.querySelector(`#source-size`),this.removeBtn=this.querySelector(`#btn-remove-conv`),this.actionsEl=this.querySelector(`#actions-panel`),this.convertBtn=this.querySelector(`#btn-convert`),this.resultsEl=this.querySelector(`#results-panel`),this.statsOrigSizeEl=this.querySelector(`#stats-orig-size`),this.statsConvSizeEl=this.querySelector(`#stats-conv-size`),this.downloadBtn=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetConverter()}),this.convertBtn.addEventListener(`click`,()=>this.runConversion())}handleFileSelect(t){if(this.fromType!==`*`&&!t.type.startsWith(`image/`)){alert(`Invalid file format.`);return}this.selectedFile=t,this.sourceNameEl.textContent=t.name,this.sourceSizeEl.textContent=e(t.size);let n=new FileReader;n.onload=e=>{this.previewImgEl.src=e.target?.result,this.idleStateEl.classList.add(`hidden`),this.previewStateEl.classList.remove(`hidden`),this.actionsEl.classList.remove(`hidden`),this.resultsEl.classList.add(`hidden`)},n.readAsDataURL(t)}resetConverter(){this.selectedFile=null,this.convertedBlob=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.idleStateEl.classList.remove(`hidden`),this.previewStateEl.classList.add(`hidden`),this.actionsEl.classList.add(`hidden`),this.resultsEl.classList.add(`hidden`)}runConversion(){if(!this.selectedFile)return;let t=new Image;t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);r&&(r.fillStyle=`#FFFFFF`,r.fillRect(0,0,n.width,n.height),r.drawImage(t,0,0),n.toBlob(t=>{if(!t)return;this.convertedBlob=t,this.statsOrigSizeEl.textContent=e(this.selectedFile.size),this.statsConvSizeEl.textContent=e(t.size);let n=URL.createObjectURL(t);this.downloadBtn.href=n;let r=this.selectedFile.name.substring(0,this.selectedFile.name.lastIndexOf(`.`));this.downloadBtn.download=`${r}.${this.toExt}`,this.resultsEl.classList.remove(`hidden`),this.resultsEl.scrollIntoView({behavior:`smooth`})},this.toType,.95))},t.src=this.previewImgEl.src}};customElements.get(`png-jpg-tool`)||customElements.define(`png-jpg-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-letter-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{quantity:t,upper:n,lower:r,unique:i,separator:a}=e,o=``;if(r&&(o+=`abcdefghijklmnopqrstuvwxyz`),n&&(o+=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`),!o)return[];let s=t;i&&s>o.length&&(s=o.length);let c=[],l=o.split(``),u=e=>{if(typeof globalThis<`u`&&globalThis.crypto){let t=new Uint32Array(1);return globalThis.crypto.getRandomValues(t),Math.floor(t[0]/4294967296*e)}return Math.floor(Math.random()*e)};for(let e=0;e<s;e++){let e=u(l.length);c.push(l[e]),i&&l.splice(e,1)}return c}var t=class extends HTMLElement{qtyInput;sepSelect;optLower;optUpper;optUnique;outputEl;btnGenerate;btnCopy;connectedCallback(){this.qtyInput=this.querySelector(`#letter-qty`),this.sepSelect=this.querySelector(`#letter-sep`),this.optLower=this.querySelector(`#opt-lower`),this.optUpper=this.querySelector(`#opt-upper`),this.optUnique=this.querySelector(`#opt-unique`),this.outputEl=this.querySelector(`#letter-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let t=parseInt(this.qtyInput.value,10),n=this.sepSelect.value,r=n===`\\\\n`?`\n`:n,i=this.optUpper.checked,a=this.optLower.checked,o=this.optUnique.checked;if(isNaN(t)){this.outputEl.value=`Please enter a valid quantity.`;return}if(!i&&!a){this.outputEl.value=`Please select at least Lowercase or Uppercase.`;return}let s=e({quantity:t,upper:i,lower:a,unique:o,separator:r});this.outputEl.value=s.join(r)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy letters`,e)}}};customElements.get(`rand-letter-tool`)||customElements.define(`rand-letter-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/unicode-converter/ui.astro?astro&type=script&index=0&lang.ts","function e(e){return e?Array.from(e).map(e=>{let t=e.codePointAt(0)||0,n=t.toString(16).toUpperCase();n.length<4&&(n=n.padStart(4,`0`));let r=t.toString(2),i=Math.ceil(r.length/8)*8;return r=r.padStart(i||8,`0`),{char:e,codePoint:`U+${n}`,decimal:t,hex:n,htmlDec:`&#${t};`,htmlHex:`&#x${n.toLowerCase()};`,binary:r}}):[]}function t(t,n){let r=e(t);return r.length===0?``:n===`htmlDec`?r.map(e=>e.htmlDec).join(``):n===`htmlHex`?r.map(e=>e.htmlHex).join(``):r.map(e=>e[n]).join(` `)}var n=class extends HTMLElement{textInput;textOutput;formatSelect;tbody;btnCopy;connectedCallback(){this.textInput=this.querySelector(`#text-input`),this.textOutput=this.querySelector(`#text-output`),this.formatSelect=this.querySelector(`#format-select`),this.tbody=this.querySelector(`#analysis-tbody`),this.btnCopy=this.querySelector(`#btn-copy`),this.textInput.addEventListener(`input`,()=>this.handleUpdate()),this.formatSelect.addEventListener(`change`,()=>this.handleUpdate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy`&&this.handleCopy()})}handleUpdate(){let n=this.textInput.value,r=this.formatSelect.value;this.textOutput.value=t(n,r);let i=e(n);if(i.length===0){this.tbody.innerHTML=`\n          <tr>\n            <td colspan=\"6\" class=\"empty-cell\">No characters to analyze</td>\n          </tr>\n        `;return}this.tbody.innerHTML=i.map(e=>`\n        <tr>\n          <td><strong>${e.char}</strong></td>\n          <td>${e.codePoint}</td>\n          <td>${e.decimal}</td>\n          <td>${e.hex}</td>\n          <td><code>${this.escapeHtml(e.htmlDec)}</code></td>\n          <td>${e.binary}</td>\n        </tr>\n      `).join(``)}escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}handleClear(){this.textInput.value=``,this.handleUpdate(),this.textInput.focus()}handleLoadSample(){this.textInput.value=`Hello 😊 ⚡`,this.handleUpdate()}async handleCopy(){let e=this.textOutput.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`unicode-converter-tool`)||customElements.define(`unicode-converter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/remove-text-formatting/ui.astro?astro&type=script&index=0&lang.ts","function e(e){return e.normalize(`NFKD`).replace(/[\\u0300-\\u036f]/g,``)}function t(e){return e.replace(/<style[\\s\\S]*?<\\/style>/gi,``).replace(/<script[\\s\\S]*?<\\/script>/gi,``).replace(/<[^>]+>/g,` `).replace(/&nbsp;/g,` `)}function n(e){return e.replace(/^#{1,6}\\s+/gm,``).replace(/[\\*_]{1,3}(.*?)[\\*_]{1,3}/g,`$1`).replace(/\\[(.*?)\\]\\((.*?)\\)/g,`$1`).replace(/!\\[(.*?)\\]\\((.*?)\\)/g,`$1`).replace(/`(.*?)`/g,`$1`).replace(/```[\\s\\S]*?```/g,``).replace(/^\\s*>\\s+/gm,``).replace(/^\\s*[\\-\\*\\+]\\s+/gm,``).replace(/^\\s*\\d+\\.\\s+/gm,``).replace(/^\\s*[\\-\\*_]{3,}\\s*$/gm,``)}function r(e){let t=e.replace(/\\[[a-zA-Z\\*]+(?:=[^\\]]+)?\\]([\\s\\S]*?)\\[\\/[a-zA-Z\\*]+\\]/gi,`$1`);return t=t.replace(/\\[\\/??[a-zA-Z\\*]+(?:=[^\\]]+)?\\]/gi,``),t}function i(e){let t=e.replace(/[ \\t]+/g,` `);return t=t.split(/\\r?\\n/).map(e=>e.trim()).join(`\n`),t=t.replace(/\\n{3,}/g,`\n\n`),t.trim()}function a(a,o){if(!a)return``;let s=a;return o.normalizeUnicode&&(s=e(s)),o.stripBbcode&&(s=r(s)),o.stripHtml&&(s=t(s)),o.stripMarkdown&&(s=n(s)),o.collapseWhitespace&&(s=i(s)),s}var o=class extends HTMLElement{inputEl;outputEl;htmlEl;markdownEl;bbcodeEl;unicodeEl;spaceEl;connectedCallback(){this.inputEl=this.querySelector(`#format-remover-input`),this.outputEl=this.querySelector(`#format-remover-output`),this.htmlEl=this.querySelector(`#opt-html`),this.markdownEl=this.querySelector(`#opt-markdown`),this.bbcodeEl=this.querySelector(`#opt-bbcode`),this.unicodeEl=this.querySelector(`#opt-unicode`),this.spaceEl=this.querySelector(`#opt-space`),this.inputEl.addEventListener(`input`,()=>this.handleClean()),[this.htmlEl,this.markdownEl,this.bbcodeEl,this.unicodeEl,this.spaceEl].forEach(e=>e.addEventListener(`change`,()=>this.handleClean())),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clean`&&this.handleClean(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()})}handleClean(){let e=this.inputEl.value;if(!e){this.outputEl.value=``;return}let t=a(e,{stripHtml:this.htmlEl.checked,stripMarkdown:this.markdownEl.checked,stripBbcode:this.bbcodeEl.checked,normalizeUnicode:this.unicodeEl.checked,collapseWhitespace:this.spaceEl.checked});this.outputEl.value=t}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.htmlEl.checked=!0,this.markdownEl.checked=!0,this.bbcodeEl.checked=!0,this.unicodeEl.checked=!0,this.spaceEl.checked=!0,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`<h1>Sample Rich Text</h1>\nThis is **bold markdown** and [i]italic BBCode[/i].\n\nHere are some math Unicode letters: 𝕿𝖍𝖎𝖘 𝖎𝖘 𝖕𝖑𝖆𝖎𝖓 𝖙𝖊𝖝𝖙.\n\nDouble   spaces    can be collapsed   too! <script>console.log(1)<\\/script>`,this.handleClean()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`remove-formatting-tool`)||customElements.define(`remove-formatting-tool`,o);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/html-to-pdf/ui.astro?astro&type=script&index=0&lang.ts","var e=class extends HTMLElement{inputCodeEl;sizeSelectEl;orientationSelectEl;marginSelectEl;btnUpdatePreviewEl;btnDownloadPdfEl;previewSandboxEl;connectedCallback(){this.inputCodeEl=this.querySelector(`#html-code-input`),this.sizeSelectEl=this.querySelector(`#pdf-page-size`),this.orientationSelectEl=this.querySelector(`#pdf-orientation`),this.marginSelectEl=this.querySelector(`#pdf-margin`),this.btnUpdatePreviewEl=this.querySelector(`#btn-update-preview`),this.btnDownloadPdfEl=this.querySelector(`#btn-download-pdf`),this.previewSandboxEl=this.querySelector(`#preview-sandbox`),this.inputCodeEl.value=`<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body {\n      font-family: 'Helvetica Neue', Arial, sans-serif;\n      color: #333;\n      padding: 10px;\n    }\n    .invoice-card {\n      border: 1px solid #eee;\n      border-radius: 8px;\n      padding: 24px;\n      background: #fdfdfd;\n      max-width: 600px;\n      margin: 0 auto;\n    }\n    .header {\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 2px solid #c4a9f3;\n      padding-bottom: 10px;\n      margin-bottom: 20px;\n    }\n    .title {\n      font-size: 24px;\n      font-weight: 700;\n      color: #111;\n    }\n    .details {\n      margin-bottom: 20px;\n      line-height: 1.6;\n    }\n    .table {\n      width: 100%;\n      border-collapse: collapse;\n      margin-top: 10px;\n    }\n    .table th, .table td {\n      border: 1px solid #ddd;\n      padding: 8px;\n      text-align: left;\n    }\n    .table th {\n      background-color: #f2f2f2;\n    }\n    .total {\n      text-align: right;\n      font-size: 18px;\n      font-weight: bold;\n      margin-top: 15px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"invoice-card\">\n    <div class=\"header\">\n      <div>\n        <div class=\"title\">INVOICE</div>\n        <div>#INV-2026-001</div>\n      </div>\n      <div style=\"text-align: right;\">\n        <strong>Lowkeydevs</strong><br>\n        info@Lowkeydevs.com\n      </div>\n    </div>\n    <div class=\"details\">\n      <strong>Billed To:</strong> John Doe (john@example.com)<br>\n      <strong>Date:</strong> July 5, 2026\n    </div>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Description</th>\n          <th>Qty</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Developer API Design Package</td>\n          <td>1</td>\n          <td>$49.00</td>\n        </tr>\n        <tr>\n          <td>Premium PDF Tools Setup</td>\n          <td>1</td>\n          <td>$25.00</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"total\">Total: $74.00</div>\n  </div>\n</body>\n</html>`,this.btnUpdatePreviewEl.addEventListener(`click`,()=>this.updatePreview()),this.btnDownloadPdfEl.addEventListener(`click`,()=>this.downloadPdf()),setTimeout(()=>this.updatePreview(),200)}updatePreview(){let e=this.inputCodeEl.value,t=this.previewSandboxEl.contentDocument||this.previewSandboxEl.contentWindow?.document;t&&(t.open(),t.write(e),t.close())}async downloadPdf(){if(window.html2pdf===void 0){alert(`Converter library is loading. Please try again.`);return}this.updatePreview();let e=this.previewSandboxEl.contentDocument||this.previewSandboxEl.contentWindow?.document;if(!e||!e.body){alert(`Preview content is empty.`);return}let t=this.sizeSelectEl.value,n=this.orientationSelectEl.value,r={margin:parseInt(this.marginSelectEl.value,10),filename:`web_layout.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:`mm`,format:t,orientation:n}};try{window.html2pdf().set(r).from(e.body).save()}catch(e){console.error(e),alert(`Failed to generate PDF from HTML.`)}}};customElements.get(`html-to-pdf-tool`)||customElements.define(`html-to-pdf-tool`,e);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/reverse-text-generator/ui.astro?astro&type=script&index=0&lang.ts","var e={a:`ɐ`,b:`q`,c:`ɔ`,d:`p`,e:`ǝ`,f:`ɟ`,g:`ƃ`,h:`ɥ`,i:`ᴉ`,j:`ɾ`,k:`ʞ`,l:`l`,m:`ɯ`,n:`u`,o:`o`,p:`d`,q:`b`,r:`ɹ`,s:`s`,t:`ʇ`,u:`n`,v:`ʌ`,w:`ʍ`,x:`x`,y:`ʎ`,z:`z`,A:`∀`,B:`q`,C:`Ɔ`,D:`p`,E:`Ǝ`,F:`Ⅎ`,G:`Ɔ`,H:`H`,I:`I`,J:`ſ`,K:`ʞ`,L:`˥`,M:`W`,N:`N`,O:`O`,P:`Ԁ`,Q:`Ό`,R:`ᴚ`,S:`S`,T:`┴`,U:`∩`,V:`Λ`,W:`M`,X:`X`,Y:`⅄`,Z:`Z`,1:`Ɩ`,2:`ᄅ`,3:`Ɛ`,4:`ㄣ`,5:`ϛ`,6:`9`,7:`ㄥ`,8:`8`,9:`6`,0:`0`,\".\":`˙`,\",\":`'`,\"'\":`,`,'\"':`„`,\"?\":`¿`,\"!\":`¡`,\"(\":`)`,\")\":`(`,\"[\":`]`,\"]\":`[`,\"{\":`}`,\"}\":`{`,\"<\":`>`,\">\":`<`,\"&\":`⅋`,_:`‾`,\";\":`؛`,\"`\":\"`\",\"\\\\\":`\\\\`,\"/\":`/`};function t(t,n){if(!t)return``;switch(n){case`words`:return t.split(/(\\r?\\n)/).map(e=>e.match(/\\r?\\n/)?e:e.split(/\\s+/).reverse().join(` `)).join(``);case`lines`:return t.split(/\\r?\\n/).reverse().join(`\n`);case`upside-down`:return Array.from(t).map(t=>e[t]||t).reverse().join(``);default:return Array.from(t).reverse().join(``)}}var n=class extends HTMLElement{inputEl;outputEl;modeEl;connectedCallback(){this.inputEl=this.querySelector(`#reverse-input`),this.outputEl=this.querySelector(`#reverse-output`),this.modeEl=this.querySelector(`#reverse-mode`),this.inputEl.addEventListener(`input`,()=>this.handleReverse()),this.modeEl.addEventListener(`change`,()=>this.handleReverse()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`reverse`&&this.handleReverse(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()})}handleReverse(){let e=this.inputEl.value;if(!e){this.outputEl.value=``;return}let n=this.modeEl.value,r=t(e,n);this.outputEl.value=r}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.modeEl.value=`characters`,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`A man, a plan, a canal: Panama!`,this.modeEl.value=`characters`,this.handleReverse()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`reverse-text-tool`)||customElements.define(`reverse-text-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-number-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{min:t,max:n,quantity:r,unique:i,sort:a}=e;if(t>n)return[];let o=n-t+1,s=r;i&&s>o&&(s=o);let c=[],l=new Set,u=()=>{if(typeof globalThis<`u`&&globalThis.crypto){let e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]/4294967296}return Math.random()};for(;c.length<s;){let e=Math.floor(u()*o)+t;i?l.has(e)||(l.add(e),c.push(e)):c.push(e)}return a===`asc`?c.sort((e,t)=>e-t):a===`desc`&&c.sort((e,t)=>t-e),c}var t=class extends HTMLElement{minInput;maxInput;qtyInput;sortSelect;sepSelect;uniqueCheckbox;outputEl;btnGenerate;btnCopy;connectedCallback(){this.minInput=this.querySelector(`#num-min`),this.maxInput=this.querySelector(`#num-max`),this.qtyInput=this.querySelector(`#num-qty`),this.sortSelect=this.querySelector(`#num-sort`),this.sepSelect=this.querySelector(`#num-sep`),this.uniqueCheckbox=this.querySelector(`#num-unique`),this.outputEl=this.querySelector(`#num-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let t=parseInt(this.minInput.value,10),n=parseInt(this.maxInput.value,10),r=parseInt(this.qtyInput.value,10),i=this.sortSelect.value,a=this.sepSelect.value,o=a===`\\\\n`?`\n`:a,s=this.uniqueCheckbox.checked;if(isNaN(t)||isNaN(n)||isNaN(r)){this.outputEl.value=`Please enter valid numbers.`;return}if(t>n){this.outputEl.value=`Minimum cannot be greater than Maximum.`;return}let c=e({min:t,max:n,quantity:r,unique:s,sort:i,separator:o});this.outputEl.value=c.join(o)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)||e.startsWith(`Minimum`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy numbers`,e)}}};customElements.get(`rand-num-tool`)||customElements.define(`rand-num-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-month-generator/ui.astro?astro&type=script&index=0&lang.ts","var e=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],t=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],n=[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];function r(r){let{quantity:i,format:a,unique:o}=r,s=e;a===`short`?s=t:a===`number`&&(s=n);let c=i;o&&c>12&&(c=12);let l=[],u=[...s],d=e=>{if(typeof globalThis<`u`&&globalThis.crypto){let t=new Uint32Array(1);return globalThis.crypto.getRandomValues(t),Math.floor(t[0]/4294967296*e)}return Math.floor(Math.random()*e)};for(let e=0;e<c;e++){let e=d(u.length);l.push(u[e]),o&&u.splice(e,1)}return l}var i=class extends HTMLElement{qtyInput;formatSelect;uniqueCheckbox;outputEl;btnGenerate;btnCopy;connectedCallback(){this.qtyInput=this.querySelector(`#month-qty`),this.formatSelect=this.querySelector(`#month-format`),this.uniqueCheckbox=this.querySelector(`#opt-unique`),this.outputEl=this.querySelector(`#month-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let e=parseInt(this.qtyInput.value,10),t=this.formatSelect.value,n=this.uniqueCheckbox.checked;if(isNaN(e)){this.outputEl.value=`Please enter a valid quantity.`;return}let i=r({quantity:e,format:t,unique:n});this.outputEl.value=i.join(`\n`)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy months`,e)}}};customElements.get(`rand-month-tool`)||customElements.define(`rand-month-tool`,i);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/random-date-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t){let n=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,`0`),i=e.getDate().toString().padStart(2,`0`);return t===`MM/DD/YYYY`?`${r}/${i}/${n}`:t===`DD/MM/YYYY`?`${i}/${r}/${n}`:t===`ISO`?e.toISOString():`${n}-${r}-${i}`}function t(t){let{startDate:n,endDate:r,quantity:i,format:a}=t,o=Date.parse(n),s=Date.parse(r);if(isNaN(o)||isNaN(s)||o>s)return[];let c=s-o,l=[],u=()=>{if(typeof globalThis<`u`&&globalThis.crypto){let e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]/4294967296}return Math.random()};for(let t=0;t<i;t++){let t=o+Math.floor(u()*(c+1)),n=new Date(t);l.push(e(n,a))}return l}var n=class extends HTMLElement{startInput;endInput;qtyInput;formatSelect;outputEl;btnGenerate;btnCopy;connectedCallback(){this.startInput=this.querySelector(`#date-start`),this.endInput=this.querySelector(`#date-end`),this.qtyInput=this.querySelector(`#date-qty`),this.formatSelect=this.querySelector(`#date-format`),this.outputEl=this.querySelector(`#date-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()});let e=new Date().getFullYear();this.startInput.value=`${e}-01-01`,this.endInput.value=`${e}-12-31`,this.handleGenerate()}handleGenerate(){let e=this.startInput.value,n=this.endInput.value,r=parseInt(this.qtyInput.value,10),i=this.formatSelect.value;if(!e||!n||isNaN(r)){this.outputEl.value=`Please select valid start and end dates.`;return}if(Date.parse(e)>Date.parse(n)){this.outputEl.value=`Start date cannot be after end date.`;return}let a=t({startDate:e,endDate:n,quantity:r,format:i});this.outputEl.value=a.join(`\n`)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)||e.startsWith(`Start date`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy dates`,e)}}};customElements.get(`rand-date-tool`)||customElements.define(`rand-date-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/base64-converter/ui.astro?astro&type=script&index=0&lang.ts","function e(e){if(!e)return``;let t=new TextEncoder().encode(e),n=Array.from(t,e=>String.fromCharCode(e)).join(``);return btoa(n)}function t(e){if(!e)return``;let t=e.trim().replace(/\\s+/g,``);try{let e=atob(t),n=Uint8Array.from(e,e=>e.charCodeAt(0));return new TextDecoder().decode(n)}catch{throw Error(`Invalid Base64 format`)}}var n=class extends HTMLElement{inputEl;outputEl;inputPaneTitle;outputPaneTitle;errorBannerEl;errorMessageEl;mode=`encode`;connectedCallback(){this.inputEl=this.querySelector(`#converter-input`),this.outputEl=this.querySelector(`#converter-output`),this.inputPaneTitle=this.querySelector(`#input-pane-title`),this.outputPaneTitle=this.querySelector(`#output-pane-title`),this.errorBannerEl=this.querySelector(`#converter-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample();let r=t.getAttribute(`data-mode`);r&&this.setMode(r)}),this.inputEl.addEventListener(`input`,()=>this.processConversion())}setMode(e){if(this.mode===e)return;this.mode=e,this.querySelectorAll(`.toggle-btn`).forEach(t=>{t.getAttribute(`data-mode`)===e?(t.classList.add(`active`),t.setAttribute(`aria-checked`,`true`)):(t.classList.remove(`active`),t.setAttribute(`aria-checked`,`false`))}),e===`encode`?(this.inputPaneTitle.textContent=`Plain Text Input`,this.outputPaneTitle.textContent=`Base64 Output`,this.inputEl.placeholder=`Type or paste content here...`,this.outputEl.placeholder=`Base64 output will appear here...`):(this.inputPaneTitle.textContent=`Base64 Input`,this.outputPaneTitle.textContent=`Plain Text Output`,this.inputEl.placeholder=`Paste Base64 string here...`,this.outputEl.placeholder=`Plain text output will appear here...`);let t=this.inputEl.value,n=this.outputEl.value;this.inputEl.value=n,this.outputEl.value=t,this.processConversion()}processConversion(){let n=this.inputEl.value;if(!n){this.clearOutput();return}try{if(this.mode===`encode`){let t=e(n);this.outputEl.value=t}else{let e=t(n);this.outputEl.value=e}this.hideError()}catch(e){this.showError(e.message||`Error occurred during processing.`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){this.mode===`encode`?this.inputEl.value=`Lowkeydevs is the fastest, cleanest tools site on the internet! 🚀 Check out our tools: formatters, converters, and security generators. Fully private and offline-first.`:(this.inputEl.value=`TG93S2V5RGV2cyBpcyB0aGUgZmFzdGVzdCwgY2xlYW5lc3QgdG9vbHMgc2l0ZSBvbiB0aGUgaW50ZXJuZXQhIO🚀IENoZWNrIG91dCBvdXIgdG9vbHM6IGZvcm1hdHRlcnMsIGNvbnZlcnRlcnMsIGFuZCBzZWN1cml0eSBnZW5lcmF0b3JzLiBGdWxseSBwcml2YXRlIGFuZCBvZmZsaW5lLWZpcnN0Lg==`,this.inputEl.value=`TG93S2V5RGV2cyBpcyB0aGUgZmFzdGVzdCwgY2xlYW5lc3QgdG9vbHMgc2l0ZSBvbiB0aGUgaW50ZXJuZXQhIPCfm4EgQ2hlY2sgb3V0IG91ciB0b29sczogZm9ybWF0dGVycywgY29udmVydGVycywgYW5kIHNlY3VyaXR5IGdlbmVyYXRvcnMuIEZ1bGx5IHByaXZhdGUgYW5kIG9mZmxpbmUtZmlyc3Qu`),this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}clearOutput(){this.outputEl.value=``,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.value=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`base64-converter-tool`)||customElements.define(`base64-converter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/binary-code-translator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){if(!e)return``;let t=new TextEncoder().encode(e);return Array.from(t).map(e=>e.toString(2).padStart(8,`0`)).join(` `)}function t(e){let t=e.trim();if(!t)return``;let n=t.replace(/\\s+/g,``);if(!/^[01]*$/.test(n))throw Error(`Invalid binary input. Binary code must only contain 0, 1, spaces or newlines.`);if(n.length%8!=0)throw Error(`Invalid binary length. Total number of bits must be a multiple of 8.`);let r=[];for(let e=0;e<n.length;e+=8)r.push(parseInt(n.slice(e,e+8),2));try{return new TextDecoder().decode(new Uint8Array(r))}catch{throw Error(`Failed to decode binary bytes into UTF-8 text.`)}}var n=class extends HTMLElement{inputEl;outputEl;inputPaneTitle;outputPaneTitle;errorBannerEl;errorMessageEl;mode=`encode`;connectedCallback(){this.inputEl=this.querySelector(`#converter-input`),this.outputEl=this.querySelector(`#converter-output`),this.inputPaneTitle=this.querySelector(`#input-pane-title`),this.outputPaneTitle=this.querySelector(`#output-pane-title`),this.errorBannerEl=this.querySelector(`#converter-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample();let r=t.getAttribute(`data-mode`);r&&this.setMode(r)}),this.inputEl.addEventListener(`input`,()=>this.processConversion())}setMode(e){if(this.mode===e)return;this.mode=e,this.querySelectorAll(`.toggle-btn`).forEach(t=>{t.getAttribute(`data-mode`)===e?(t.classList.add(`active`),t.setAttribute(`aria-checked`,`true`)):(t.classList.remove(`active`),t.setAttribute(`aria-checked`,`false`))}),e===`encode`?(this.inputPaneTitle.textContent=`Plain Text Input`,this.outputPaneTitle.textContent=`Binary Output`,this.inputEl.placeholder=`Type or paste content here...`,this.outputEl.placeholder=`Binary output will appear here...`):(this.inputPaneTitle.textContent=`Binary Input`,this.outputPaneTitle.textContent=`Plain Text Output`,this.inputEl.placeholder=`Paste binary string here...`,this.outputEl.placeholder=`Plain text output will appear here...`);let t=this.inputEl.value,n=this.outputEl.value;this.inputEl.value=n,this.outputEl.value=t,this.processConversion()}processConversion(){let n=this.inputEl.value;if(!n){this.clearOutput();return}try{if(this.mode===`encode`){let t=e(n);this.outputEl.value=t}else{let e=t(n);this.outputEl.value=e}this.hideError()}catch(e){this.showError(e.message||`Error occurred during processing.`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){this.mode===`encode`?this.inputEl.value=`Binary Code is fun! 🤖`:this.inputEl.value=`01000010 01101001 01101110 01100001 01110010 01111001 00100000 01000011 01101111 01100100 01100101 00100000 01101001 01110011 00100000 01100110 01110101 01101110 00100001 00100000 11110000 10011111 10100001 10010110`,this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}clearOutput(){this.outputEl.value=``,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.value=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`binary-translator-tool`)||customElements.define(`binary-translator-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/find-and-replace-text/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t){if(!e)return{text:``,matchCount:0};if(!t.find)return{text:e,matchCount:0};let n=``,r=`g`;t.caseSensitive||(r+=`i`);try{if(t.regex)n=t.find;else{let e=t.find.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g,`\\\\$&`);t.wholeWord&&(e=`\\\\b${e}\\\\b`),n=e}let i=new RegExp(n,r),a=e.match(i),o=0;return a&&(o=a.length),{text:e.replace(i,t.replace),matchCount:o}}catch(t){return{text:e,matchCount:0,error:`Invalid Search Pattern: ${t.message}`}}}var t=class extends HTMLElement{inputEl;outputEl;findEl;replaceEl;caseEl;wholeEl;regexEl;matchStatusEl;matchCountValEl;regexErrorEl;connectedCallback(){this.inputEl=this.querySelector(`#find-replace-input`),this.outputEl=this.querySelector(`#find-replace-output`),this.findEl=this.querySelector(`#find-input`),this.replaceEl=this.querySelector(`#replace-input`),this.caseEl=this.querySelector(`#opt-case`),this.wholeEl=this.querySelector(`#opt-whole`),this.regexEl=this.querySelector(`#opt-regex`),this.matchStatusEl=this.querySelector(`#match-status`),this.matchCountValEl=this.querySelector(`#match-count-val`),this.regexErrorEl=this.querySelector(`#regex-error`),[this.inputEl,this.findEl,this.replaceEl].forEach(e=>e.addEventListener(`input`,()=>this.handleReplace())),[this.caseEl,this.wholeEl,this.regexEl].forEach(e=>e.addEventListener(`change`,()=>this.handleReplace())),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`replace`&&this.handleReplace(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()})}handleReplace(){let t=this.inputEl.value,n=this.findEl.value;if(!t){this.outputEl.value=``,this.matchStatusEl.style.display=`none`,this.regexErrorEl.style.display=`none`;return}if(!n){this.outputEl.value=t,this.matchStatusEl.style.display=`none`,this.regexErrorEl.style.display=`none`;return}let r=e(t,{find:n,replace:this.replaceEl.value,caseSensitive:this.caseEl.checked,wholeWord:this.wholeEl.checked,regex:this.regexEl.checked});r.error?(this.regexErrorEl.textContent=r.error,this.regexErrorEl.style.display=`block`,this.matchStatusEl.style.display=`none`,this.outputEl.value=t):(this.regexErrorEl.style.display=`none`,this.outputEl.value=r.text,this.matchCountValEl.textContent=`${r.matchCount} ${r.matchCount===1?`match`:`matches`} replaced`,this.matchStatusEl.style.display=`block`)}handleClear(){this.inputEl.value=``,this.outputEl.value=``,this.findEl.value=``,this.replaceEl.value=``,this.caseEl.checked=!1,this.wholeEl.checked=!1,this.regexEl.checked=!1,this.matchStatusEl.style.display=`none`,this.regexErrorEl.style.display=`none`,this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`The Quick Brown Fox jumps over the lazy dog.\n\nFoxes are related to dogs, but they are different species of animals. This fox is quick!`,this.findEl.value=`fox`,this.replaceEl.value=`cat`,this.caseEl.checked=!1,this.wholeEl.checked=!0,this.regexEl.checked=!1,this.handleReplace()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`find-replace-tool`)||customElements.define(`find-replace-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/png-to-webp/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fromType;toType;toExt;fileInputEl;dropzoneEl;idleStateEl;previewStateEl;previewImgEl;sourceNameEl;sourceSizeEl;removeBtn;actionsEl;convertBtn;resultsEl;statsOrigSizeEl;statsConvSizeEl;downloadBtn;selectedFile=null;convertedBlob=null;connectedCallback(){this.fromType=this.getAttribute(`data-from`)||`image/png`,this.toType=this.getAttribute(`data-to`)||`image/webp`,this.toExt=this.getAttribute(`data-ext`)||`webp`,this.fileInputEl=this.querySelector(`#conv-file-input`),this.dropzoneEl=this.querySelector(`#conv-dropzone`),this.idleStateEl=this.querySelector(`#conv-idle-state`),this.previewStateEl=this.querySelector(`#conv-preview-state`),this.previewImgEl=this.querySelector(`#conv-preview-img`),this.sourceNameEl=this.querySelector(`#source-name`),this.sourceSizeEl=this.querySelector(`#source-size`),this.removeBtn=this.querySelector(`#btn-remove-conv`),this.actionsEl=this.querySelector(`#actions-panel`),this.convertBtn=this.querySelector(`#btn-convert`),this.resultsEl=this.querySelector(`#results-panel`),this.statsOrigSizeEl=this.querySelector(`#stats-orig-size`),this.statsConvSizeEl=this.querySelector(`#stats-conv-size`),this.downloadBtn=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetConverter()}),this.convertBtn.addEventListener(`click`,()=>this.runConversion())}handleFileSelect(t){if(this.fromType!==`*`&&!t.type.startsWith(`image/`)){alert(`Invalid file format.`);return}this.selectedFile=t,this.sourceNameEl.textContent=t.name,this.sourceSizeEl.textContent=e(t.size);let n=new FileReader;n.onload=e=>{this.previewImgEl.src=e.target?.result,this.idleStateEl.classList.add(`hidden`),this.previewStateEl.classList.remove(`hidden`),this.actionsEl.classList.remove(`hidden`),this.resultsEl.classList.add(`hidden`)},n.readAsDataURL(t)}resetConverter(){this.selectedFile=null,this.convertedBlob=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.idleStateEl.classList.remove(`hidden`),this.previewStateEl.classList.add(`hidden`),this.actionsEl.classList.add(`hidden`),this.resultsEl.classList.add(`hidden`)}runConversion(){if(!this.selectedFile)return;let t=new Image;t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);r&&(r.drawImage(t,0,0),n.toBlob(t=>{if(!t)return;this.convertedBlob=t,this.statsOrigSizeEl.textContent=e(this.selectedFile.size),this.statsConvSizeEl.textContent=e(t.size);let n=URL.createObjectURL(t);this.downloadBtn.href=n;let r=this.selectedFile.name.substring(0,this.selectedFile.name.lastIndexOf(`.`));this.downloadBtn.download=`${r}.${this.toExt}`,this.resultsEl.classList.remove(`hidden`),this.resultsEl.scrollIntoView({behavior:`smooth`})},this.toType,.9))},t.src=this.previewImgEl.src}};customElements.get(`png-webp-tool`)||customElements.define(`png-webp-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/sentence-counter/ui.astro?astro&type=script&index=0&lang.ts","function e(e){if(!e||e.trim()===``)return{sentences:0,words:0,characters:0,charactersNoSpaces:0,paragraphs:0,averageSentenceLength:0,readingTimeMin:0};let t=e.length,n=e.replace(/\\s/g,``).length,r=e.trim().split(/\\s+/).filter(e=>e.length>0).length,i=e.split(/\\r?\\n\\s*\\r?\\n/).filter(e=>e.trim().length>0).length||+(e.trim().length>0),a=e.replace(/\\b(Mr|Mrs|Ms|Dr|Jr|Sr|vs|e\\.g|i\\.e|etc|Prof|vs)\\./gi,`$1TEMP`).match(/[^.!?]+(?:[.!?]+(?=\\s|$)|$)/g),o=0;a&&(o=a.filter(e=>e.trim().length>0).length),r>0&&o===0&&(o=1);let s=o>0?parseFloat((r/o).toFixed(1)):0,c=parseFloat((r/225).toFixed(2));return{sentences:o,words:r,characters:t,charactersNoSpaces:n,paragraphs:i,averageSentenceLength:s,readingTimeMin:c}}var t=class extends HTMLElement{inputEl;sentencesEl;wordsEl;charsAllEl;charsNoSpaceEl;paragraphsEl;avgLengthEl;readingTimeEl;connectedCallback(){this.inputEl=this.querySelector(`#sentence-counter-input`),this.sentencesEl=this.querySelector(`#stat-sentences`),this.wordsEl=this.querySelector(`#stat-words`),this.charsAllEl=this.querySelector(`#stat-chars-all`),this.charsNoSpaceEl=this.querySelector(`#stat-chars-no-space`),this.paragraphsEl=this.querySelector(`#stat-paragraphs`),this.avgLengthEl=this.querySelector(`#stat-avg-length`),this.readingTimeEl=this.querySelector(`#stat-reading-time`),this.inputEl.addEventListener(`input`,()=>this.updateStats()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy-report`&&this.handleCopyReport()})}updateStats(){let t=this.inputEl.value,n=e(t);this.sentencesEl.textContent=n.sentences.toLocaleString(),this.wordsEl.textContent=n.words.toLocaleString(),this.charsAllEl.textContent=n.characters.toLocaleString(),this.charsNoSpaceEl.textContent=n.charactersNoSpaces.toLocaleString(),this.paragraphsEl.textContent=n.paragraphs.toLocaleString(),this.avgLengthEl.innerHTML=`${n.averageSentenceLength.toFixed(1)}<span class=\"unit\"> words/sent</span>`,this.readingTimeEl.innerHTML=`${n.readingTimeMin.toFixed(2)}<span class=\"unit\"> min</span>`}handleClear(){this.inputEl.value=``,this.updateStats(),this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`Hey there! Welcome to the Sentence Counter. This is a very cool tool designed by Lowkeydevs. Feel free to replace this text with your own! How fast can you read this paragraph? An average reader takes about 5 seconds. Let us know if you find it helpful!\n\nHere is a second paragraph just to test the paragraph counter. It works perfectly.`,this.updateStats()}async handleCopyReport(){let t=this.inputEl.value,n=e(t),r=`Lowkeydevs Text Report:\n-------------------------\nSentences: ${n.sentences}\nWords: ${n.words}\nCharacters (All): ${n.characters}\nCharacters (No spaces): ${n.charactersNoSpaces}\nParagraphs: ${n.paragraphs}\nAvg Sentence Length: ${n.averageSentenceLength} words/sentence\nEstimated Reading Time: ${n.readingTimeMin} minutes\n-------------------------`;try{await navigator.clipboard.writeText(r);let e=this.querySelector(`button[data-action=\"copy-report\"]`),t=e.innerHTML;e.innerHTML=`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-color\"><path d=\"M20 6 9 17l-5-5\"/></svg> Copied!`,setTimeout(()=>{e.innerHTML=t},2e3)}catch(e){console.error(`Failed to copy report`,e)}}};customElements.get(`sentence-counter-tool`)||customElements.define(`sentence-counter-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/json-formatter/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){let n=e.trim();if(!n)return``;let r=JSON.parse(n),i=t===`tab`?`\t`:Number(t);return JSON.stringify(r,null,i)}function t(e){let t=e.trim();if(!t)return``;let n=JSON.parse(t);return JSON.stringify(n)}var n=class extends HTMLElement{inputEl;outputEl;indentSelectEl;errorBannerEl;errorMessageEl;connectedCallback(){this.inputEl=this.querySelector(`#json-input`),this.outputEl=this.querySelector(`#json-output`),this.indentSelectEl=this.querySelector(`#json-indent-select`),this.errorBannerEl=this.querySelector(`#json-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`format`&&this.handleFormat(),n===`minify`&&this.handleMinify(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>this.handleFormat(!0)),this.indentSelectEl.addEventListener(`change`,()=>this.handleFormat())}handleFormat(t=!1){let n=this.inputEl.value;if(!n.trim()){this.clearOutput();return}try{let t=this.indentSelectEl.value,r=e(n,t);this.outputEl.textContent=r,this.hideError()}catch(e){t||this.showError(`Invalid JSON: ${e.message}`)}}handleMinify(){let e=this.inputEl.value;if(e.trim())try{let n=t(e);this.outputEl.textContent=n,this.hideError()}catch(e){this.showError(`Invalid JSON: ${e.message}`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){let e={projectName:`Lowkeydevs`,version:`1.0.0`,description:`The ultimate tools collection`,active:!0,stats:{lighthouse:100,speed:`sub-100ms`},tools:[`JSON Formatter`,`Password Generator`,`Base64 Converter`]};this.inputEl.value=JSON.stringify(e,null,2),this.handleFormat()}async handleCopy(){let e=this.outputEl.textContent;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}clearOutput(){this.outputEl.textContent=``,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.textContent=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`json-formatter-tool`)||customElements.define(`json-formatter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/nanoid-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{size:t,alphabet:n,quantity:r}=e,i=n||`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-`,a=[],o=e=>{if(typeof globalThis<`u`&&globalThis.crypto){let t=new Uint32Array(1);return globalThis.crypto.getRandomValues(t),Math.floor(t[0]/4294967296*e)}return Math.floor(Math.random()*e)};for(let e=0;e<r;e++){let e=``;for(let n=0;n<t;n++)e+=i[o(i.length)];a.push(e)}return a}var t=class extends HTMLElement{sizeSlider;qtySlider;sizeVal;qtyVal;alphabetInput;outputEl;btnGenerate;btnCopy;connectedCallback(){this.sizeSlider=this.querySelector(`#nanoid-size`),this.qtySlider=this.querySelector(`#nanoid-qty`),this.sizeVal=this.querySelector(`#size-val`),this.qtyVal=this.querySelector(`#qty-val`),this.alphabetInput=this.querySelector(`#nanoid-alphabet`),this.outputEl=this.querySelector(`#nanoid-output`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.sizeSlider.addEventListener(`input`,()=>{this.sizeVal.textContent=this.sizeSlider.value}),this.qtySlider.addEventListener(`input`,()=>{this.qtyVal.textContent=this.qtySlider.value}),this.btnGenerate.addEventListener(`click`,()=>this.handleGenerate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&t.getAttribute(`data-action`)===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let t=parseInt(this.sizeSlider.value,10),n=parseInt(this.qtySlider.value,10),r=this.alphabetInput.value;if(!r){this.outputEl.value=`Please enter alphabet characters.`;return}let i=e({size:t,alphabet:r,quantity:n});this.outputEl.value=i.join(`\n`)}async handleCopy(){let e=this.outputEl.value;if(!(!e||e.startsWith(`Please`)))try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy Nano IDs`,e)}}};customElements.get(`nanoid-tool`)||customElements.define(`nanoid-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/unlock-pdf/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fileInputEl;dropzoneEl;passwordPromptPanelEl;docNameEl;docSizeEl;passwordInputEl;passwordErrorEl;btnCancelEl;btnUnlockEl;loadingPanelEl;resultsPanelEl;downloadBtnEl;selectedFile=null;arrayBuffer=null;connectedCallback(){this.fileInputEl=this.querySelector(`#unlock-file-input`),this.dropzoneEl=this.querySelector(`#unlock-dropzone`),this.passwordPromptPanelEl=this.querySelector(`#password-prompt-panel`),this.docNameEl=this.querySelector(`#doc-name`),this.docSizeEl=this.querySelector(`#doc-size`),this.passwordInputEl=this.querySelector(`#pdf-password`),this.passwordErrorEl=this.querySelector(`#password-error`),this.btnCancelEl=this.querySelector(`#btn-cancel`),this.btnUnlockEl=this.querySelector(`#btn-unlock`),this.loadingPanelEl=this.querySelector(`#loading-panel`),this.resultsPanelEl=this.querySelector(`#results-panel`),this.downloadBtnEl=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFile(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFile(this.fileInputEl.files[0])}),this.btnCancelEl.addEventListener(`click`,()=>{this.reset()}),this.btnUnlockEl.addEventListener(`click`,()=>this.runUnlock()),this.passwordInputEl.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.runUnlock()})}async handleFile(t){if(t.type!==`application/pdf`&&!t.name.endsWith(`.pdf`)){alert(`Please upload a valid PDF file.`);return}if(window.PDFLib===void 0){alert(`PDF manipulation library is still loading. Please wait.`);return}this.selectedFile=t,this.docNameEl.textContent=t.name,this.docSizeEl.textContent=e(t.size),this.passwordErrorEl.classList.add(`hidden`),this.passwordInputEl.value=``,this.dropzoneEl.classList.add(`hidden`),this.loadingPanelEl.classList.remove(`hidden`);try{let{PDFDocument:e}=window.PDFLib;this.arrayBuffer=await t.arrayBuffer();let n=await(await e.load(this.arrayBuffer)).save();this.finishDecryption(n)}catch(e){console.log(`PDF load failed, checking password status:`,e),this.loadingPanelEl.classList.add(`hidden`),this.passwordPromptPanelEl.classList.remove(`hidden`),this.passwordInputEl.focus()}}async runUnlock(){if(!this.selectedFile||!this.arrayBuffer)return;let e=this.passwordInputEl.value;if(!e){alert(`Please enter a password.`);return}this.loadingPanelEl.classList.remove(`hidden`),this.passwordPromptPanelEl.classList.add(`hidden`),this.passwordErrorEl.classList.add(`hidden`);try{let{PDFDocument:t}=window.PDFLib,n=await(await t.load(this.arrayBuffer,{password:e})).save();this.finishDecryption(n)}catch(e){console.error(`Decryption failed:`,e),this.loadingPanelEl.classList.add(`hidden`),this.passwordPromptPanelEl.classList.remove(`hidden`),this.passwordErrorEl.classList.remove(`hidden`),this.passwordInputEl.focus()}}finishDecryption(e){let t=new Blob([e],{type:`application/pdf`}),n=URL.createObjectURL(t);this.downloadBtnEl.href=n;let r=this.selectedFile.name.replace(/\\.[^/.]+$/,``);this.downloadBtnEl.download=`${r}_unlocked.pdf`,this.loadingPanelEl.classList.add(`hidden`),this.resultsPanelEl.classList.remove(`hidden`),this.resultsPanelEl.scrollIntoView({behavior:`smooth`})}reset(){this.selectedFile=null,this.arrayBuffer=null,this.fileInputEl.value=``,this.passwordInputEl.value=``,this.dropzoneEl.classList.remove(`hidden`),this.passwordPromptPanelEl.classList.add(`hidden`),this.resultsPanelEl.classList.add(`hidden`),this.loadingPanelEl.classList.add(`hidden`)}};customElements.get(`unlock-pdf-tool`)||customElements.define(`unlock-pdf-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/uuid-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e={uppercase:!1,hyphens:!0,braces:!1}){let t=``;return t=typeof globalThis<`u`&&globalThis.crypto&&typeof globalThis.crypto.randomUUID==`function`?globalThis.crypto.randomUUID():`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)}),e.hyphens||(t=t.replace(/-/g,``)),e.uppercase&&(t=t.toUpperCase()),e.braces&&(t=`{${t}}`),t}function t(t){let n=Math.max(1,Math.min(100,t.quantity)),r=[];for(let i=0;i<n;i++)r.push(e(t));return r}var n=class extends HTMLElement{outputEl;qtySlider;qtyVal;optHyphens;optUppercase;optBraces;btnGenerate;btnCopy;connectedCallback(){this.outputEl=this.querySelector(`#uuid-output`),this.qtySlider=this.querySelector(`#uuid-quantity`),this.qtyVal=this.querySelector(`#qty-val`),this.optHyphens=this.querySelector(`#opt-hyphens`),this.optUppercase=this.querySelector(`#opt-uppercase`),this.optBraces=this.querySelector(`#opt-braces`),this.btnGenerate=this.querySelector(`#btn-generate`),this.btnCopy=this.querySelector(`#btn-copy`),this.qtySlider.addEventListener(`input`,()=>{this.qtyVal.textContent=this.qtySlider.value}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`generate`&&this.handleGenerate(),n===`copy`&&this.handleCopy()}),this.handleGenerate()}handleGenerate(){let e=parseInt(this.qtySlider.value,10),n=this.optUppercase.checked,r=this.optHyphens.checked,i=this.optBraces.checked,a=t({quantity:e,uppercase:n,hyphens:r,braces:i});this.outputEl.value=a.join(`\n`)}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy All`},2e3)}catch(e){console.error(`Failed to copy UUIDs`,e)}}};customElements.get(`uuid-generator-tool`)||customElements.define(`uuid-generator-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/webp-to-jpg/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fromType;toType;toExt;fileInputEl;dropzoneEl;idleStateEl;previewStateEl;previewImgEl;sourceNameEl;sourceSizeEl;removeBtn;actionsEl;convertBtn;resultsEl;statsOrigSizeEl;statsConvSizeEl;downloadBtn;selectedFile=null;convertedBlob=null;connectedCallback(){this.fromType=this.getAttribute(`data-from`)||`image/webp`,this.toType=this.getAttribute(`data-to`)||`image/jpeg`,this.toExt=this.getAttribute(`data-ext`)||`jpg`,this.fileInputEl=this.querySelector(`#conv-file-input`),this.dropzoneEl=this.querySelector(`#conv-dropzone`),this.idleStateEl=this.querySelector(`#conv-idle-state`),this.previewStateEl=this.querySelector(`#conv-preview-state`),this.previewImgEl=this.querySelector(`#conv-preview-img`),this.sourceNameEl=this.querySelector(`#source-name`),this.sourceSizeEl=this.querySelector(`#source-size`),this.removeBtn=this.querySelector(`#btn-remove-conv`),this.actionsEl=this.querySelector(`#actions-panel`),this.convertBtn=this.querySelector(`#btn-convert`),this.resultsEl=this.querySelector(`#results-panel`),this.statsOrigSizeEl=this.querySelector(`#stats-orig-size`),this.statsConvSizeEl=this.querySelector(`#stats-conv-size`),this.downloadBtn=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetConverter()}),this.convertBtn.addEventListener(`click`,()=>this.runConversion())}handleFileSelect(t){if(this.fromType!==`*`&&!t.type.startsWith(`image/`)){alert(`Invalid file format.`);return}this.selectedFile=t,this.sourceNameEl.textContent=t.name,this.sourceSizeEl.textContent=e(t.size);let n=new FileReader;n.onload=e=>{this.previewImgEl.src=e.target?.result,this.idleStateEl.classList.add(`hidden`),this.previewStateEl.classList.remove(`hidden`),this.actionsEl.classList.remove(`hidden`),this.resultsEl.classList.add(`hidden`)},n.readAsDataURL(t)}resetConverter(){this.selectedFile=null,this.convertedBlob=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.idleStateEl.classList.remove(`hidden`),this.previewStateEl.classList.add(`hidden`),this.actionsEl.classList.add(`hidden`),this.resultsEl.classList.add(`hidden`)}runConversion(){if(!this.selectedFile)return;let t=new Image;t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);r&&(r.fillStyle=`#FFFFFF`,r.fillRect(0,0,n.width,n.height),r.drawImage(t,0,0),n.toBlob(t=>{if(!t)return;this.convertedBlob=t,this.statsOrigSizeEl.textContent=e(this.selectedFile.size),this.statsConvSizeEl.textContent=e(t.size);let n=URL.createObjectURL(t);this.downloadBtn.href=n;let r=this.selectedFile.name.substring(0,this.selectedFile.name.lastIndexOf(`.`));this.downloadBtn.download=`${r}.${this.toExt}`,this.resultsEl.classList.remove(`hidden`),this.resultsEl.scrollIntoView({behavior:`smooth`})},this.toType,.95))},t.src=this.previewImgEl.src}};customElements.get(`webp-jpg-tool`)||customElements.define(`webp-jpg-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/nato-phonetic-alphabet-translator/ui.astro?astro&type=script&index=0&lang.ts","var e={a:`Alpha`,b:`Bravo`,c:`Charlie`,d:`Delta`,e:`Echo`,f:`Foxtrot`,g:`Golf`,h:`Hotel`,i:`India`,j:`Juliett`,k:`Kilo`,l:`Lima`,m:`Mike`,n:`November`,o:`Oscar`,p:`Papa`,q:`Quebec`,r:`Romeo`,s:`Sierra`,t:`Tango`,u:`Uniform`,v:`Victor`,w:`Whiskey`,x:`X-ray`,y:`Yankee`,z:`Zulu`,0:`Zero`,1:`One`,2:`Two`,3:`Three`,4:`Four`,5:`Five`,6:`Six`,7:`Seven`,8:`Eight`,9:`Nine`};function t(t,n={separator:` `,casing:`Title`}){return t?t.split(``).map(t=>{let r=t.toLowerCase();if(r in e){let t=e[r];return n.casing===`Upper`?t.toUpperCase():n.casing===`Lower`?t.toLowerCase():t}return/\\s/.test(t)?` `:t}).filter((e,t,n)=>!(e===` `&&(t===0||n[t-1]===` `))).map((e,t,n)=>e===` `?`\n`:e).join(n.separator).replace(/\\r?\\n/g,` `).trim():``}var n=class extends HTMLElement{textInput;textOutput;sepSelect;casingSelect;btnCopy;connectedCallback(){this.textInput=this.querySelector(`#text-input`),this.textOutput=this.querySelector(`#text-output`),this.sepSelect=this.querySelector(`#separator-select`),this.casingSelect=this.querySelector(`#casing-select`),this.btnCopy=this.querySelector(`#btn-copy`),this.textInput.addEventListener(`input`,()=>this.handleTranslate()),this.sepSelect.addEventListener(`change`,()=>this.handleTranslate()),this.casingSelect.addEventListener(`change`,()=>this.handleTranslate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),n===`copy`&&this.handleCopy()})}handleTranslate(){let e=this.textInput.value,n=this.sepSelect.value,r=this.casingSelect.value;this.textOutput.value=t(e,{separator:n,casing:r})}handleClear(){this.textInput.value=``,this.handleTranslate(),this.textInput.focus()}handleLoadSample(){this.textInput.value=`Lowkeydevs 101`,this.handleTranslate()}async handleCopy(){let e=this.textOutput.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}};customElements.get(`nato-translator-tool`)||customElements.define(`nato-translator-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/password-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){let{length:r,uppercase:i,lowercase:a,numbers:o,symbols:s}=e,c=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,l=`abcdefghijklmnopqrstuvwxyz`,u=`0123456789`,d=`!@#$%^&*()_+-=[]{}|;:,.<>?`,f=``,p=[];if(i&&(f+=c,p.push(t(c))),a&&(f+=l,p.push(t(l))),o&&(f+=u,p.push(t(u))),s&&(f+=d,p.push(t(d))),f.length===0)throw Error(`At least one character set must be selected`);let m=[...p],h=r-p.length;for(let e=0;e<h;e++)m.push(t(f));return n(m).join(``)}function t(e){let t=0;if(typeof globalThis<`u`&&globalThis.crypto){let n=new Uint32Array(1);globalThis.crypto.getRandomValues(n),t=n[0]%e.length}else t=Math.floor(Math.random()*e.length);return e.charAt(t)}function n(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=0;if(typeof globalThis<`u`&&globalThis.crypto){let t=new Uint32Array(1);globalThis.crypto.getRandomValues(t),n=t[0]%(e+1)}else n=Math.floor(Math.random()*(e+1));let r=t[e];t[e]=t[n],t[n]=r}return t}function r(e){if(!e)return{score:0,label:`Very Weak`,color:`var(--error-color)`};let t=0;e.length>=8&&t++,e.length>=12&&t++,/[A-Z]/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++;let n=Math.min(4,Math.floor(t/1.5)),r=[{score:0,label:`Very Weak`,color:`hsl(350, 80%, 60%)`},{score:1,label:`Weak`,color:`hsl(30, 80%, 55%)`},{score:2,label:`Medium`,color:`hsl(45, 80%, 50%)`},{score:3,label:`Strong`,color:`hsl(100, 70%, 45%)`},{score:4,label:`Excellent`,color:`hsl(142, 70%, 45%)`}];return r[n]||r[0]}var i=class extends HTMLElement{outputEl;lengthSliderEl;lengthValEl;optUpperEl;optLowerEl;optNumbersEl;optSymbolsEl;strengthTextEl;strengthBarsEl;connectedCallback(){this.outputEl=this.querySelector(`#password-output`),this.lengthSliderEl=this.querySelector(`#password-length`),this.lengthValEl=this.querySelector(`#length-val`),this.optUpperEl=this.querySelector(`#opt-upper`),this.optLowerEl=this.querySelector(`#opt-lower`),this.optNumbersEl=this.querySelector(`#opt-numbers`),this.optSymbolsEl=this.querySelector(`#opt-symbols`),this.strengthTextEl=this.querySelector(`#strength-text`),this.strengthBarsEl=this.querySelector(`#strength-bars`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`generate`&&this.handleGenerate(),n===`copy`&&this.handleCopy()}),this.lengthSliderEl.addEventListener(`input`,e=>{let t=e.target.value;this.lengthValEl.textContent=t,this.handleGenerate(!0)}),[this.optUpperEl,this.optLowerEl,this.optNumbersEl,this.optSymbolsEl].forEach(e=>{e.addEventListener(`change`,()=>this.handleGenerate(!0))}),this.handleGenerate()}handleGenerate(t=!1){let n=parseInt(this.lengthSliderEl.value),r=this.optUpperEl.checked,i=this.optLowerEl.checked,a=this.optNumbersEl.checked,o=this.optSymbolsEl.checked;try{let t=e({length:n,uppercase:r,lowercase:i,numbers:a,symbols:o});this.outputEl.textContent=t,this.updateStrength(t)}catch(e){t||(this.outputEl.textContent=e.message,this.resetStrength())}}updateStrength(e){let t=r(e);this.strengthTextEl.textContent=t.label,this.strengthTextEl.style.color=t.color,this.strengthBarsEl.querySelectorAll(`.bar`).forEach((e,n)=>{let r=e;n<=t.score?r.style.backgroundColor=t.color:r.style.backgroundColor=`var(--border-color)`})}resetStrength(){this.strengthTextEl.textContent=`None`,this.strengthTextEl.style.color=`var(--text-muted)`,this.strengthBarsEl.querySelectorAll(`.bar`).forEach(e=>{e.style.backgroundColor=`var(--border-color)`})}async handleCopy(){let e=this.outputEl.textContent;if(!(!e||e.startsWith(`Select options`)||e.startsWith(`At least one`)))try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy password`,e)}}};customElements.get(`password-generator-tool`)||customElements.define(`password-generator-tool`,i);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/pdf-to-pdfa/ui.astro?astro&type=script&index=0&lang.ts","var e=class extends HTMLElement{fileInputEl;dropzoneEl;configPanelEl;loadingPanelEl;resultsPanelEl;fileNameEl;pdfaStandardSelectEl;btnConvertPdfaEl;btnCancelEl;btnDownloadEl;selectedFile=null;connectedCallback(){this.fileInputEl=this.querySelector(`#pdfa-file-input`),this.dropzoneEl=this.querySelector(`#pdfa-dropzone`),this.configPanelEl=this.querySelector(`#pdfa-config-panel`),this.loadingPanelEl=this.querySelector(`#pdfa-loading-panel`),this.resultsPanelEl=this.querySelector(`#pdfa-results-panel`),this.fileNameEl=this.querySelector(`#file-name`),this.pdfaStandardSelectEl=this.querySelector(`#pdfa-standard`),this.btnConvertPdfaEl=this.querySelector(`#btn-convert-pdfa`),this.btnCancelEl=this.querySelector(`#btn-cancel`),this.btnDownloadEl=this.querySelector(`#btn-download`),this.fileInputEl.addEventListener(`change`,e=>this.handleFileSelect(e)),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>this.dropzoneEl.classList.remove(`dragover`)),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files.length&&this.processFile(e.dataTransfer.files[0])}),this.btnConvertPdfaEl.addEventListener(`click`,()=>this.convertToPdfa()),this.btnCancelEl.addEventListener(`click`,()=>this.reset())}handleFileSelect(e){let t=e.target;t.files?.length&&this.processFile(t.files[0])}processFile(e){if(e.type!==`application/pdf`&&!e.name.endsWith(`.pdf`)){alert(`Please upload a valid PDF file.`);return}this.selectedFile=e,this.fileNameEl.textContent=e.name,this.dropzoneEl.classList.add(`hidden`),this.configPanelEl.classList.remove(`hidden`)}async convertToPdfa(){if(this.selectedFile){if(window.PDFLib===void 0){alert(`PDF library is loading. Please wait a moment.`);return}this.configPanelEl.classList.add(`hidden`),this.loadingPanelEl.classList.remove(`hidden`);try{let{PDFDocument:e,PDFName:t}=window.PDFLib,n=await this.selectedFile.arrayBuffer(),r=await e.load(n),i=this.pdfaStandardSelectEl.value,a=`<?xpacket begin=\"\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:pdf=\"http://ns.adobe.com/pdf/1.3/\"\n    xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\"\n    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n    xmlns:pdfaid=\"http://www.aiim.org/pdfa/ns/id/\">\n   <pdfaid:part>${i[0]}</pdfaid:part>\n   <pdfaid:conformance>${i[1].toUpperCase()}</pdfaid:conformance>\n   <pdf:Producer>Lowkeydevs PDF Engine</pdf:Producer>\n   <xmp:CreatorTool>Lowkeydevs PDF/A Converter</xmp:CreatorTool>\n   <xmp:CreateDate>${new Date().toISOString()}</xmp:CreateDate>\n   <xmp:ModifyDate>${new Date().toISOString()}</xmp:ModifyDate>\n   <dc:format>application/pdf</dc:format>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"w\"?>`,o=r.context.stream(a,{Type:`Metadata`,Subtype:`XML`}),s=r.context.register(o);r.catalog.set(t.of(`Metadata`),s);let c=await r.save(),l=new Blob([c],{type:`application/pdf`}),u=URL.createObjectURL(l);this.btnDownloadEl.href=u,this.btnDownloadEl.download=`${this.selectedFile.name.replace(`.pdf`,``)}_pdfa.pdf`,this.loadingPanelEl.classList.add(`hidden`),this.resultsPanelEl.classList.remove(`hidden`)}catch(e){console.error(e),alert(`Error during conversion to PDF/A compliance structure.`),this.loadingPanelEl.classList.add(`hidden`),this.configPanelEl.classList.remove(`hidden`)}}}reset(){this.selectedFile=null,this.fileInputEl.value=``,this.configPanelEl.classList.add(`hidden`),this.loadingPanelEl.classList.add(`hidden`),this.resultsPanelEl.classList.add(`hidden`),this.dropzoneEl.classList.remove(`hidden`)}};customElements.get(`pdf-to-pdfa-tool`)||customElements.define(`pdf-to-pdfa-tool`,e);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/jpg-to-png/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fromType;toType;toExt;fileInputEl;dropzoneEl;idleStateEl;previewStateEl;previewImgEl;sourceNameEl;sourceSizeEl;removeBtn;actionsEl;convertBtn;resultsEl;statsOrigSizeEl;statsConvSizeEl;downloadBtn;selectedFile=null;convertedBlob=null;connectedCallback(){this.fromType=this.getAttribute(`data-from`)||`image/jpeg`,this.toType=this.getAttribute(`data-to`)||`image/png`,this.toExt=this.getAttribute(`data-ext`)||`png`,this.fileInputEl=this.querySelector(`#conv-file-input`),this.dropzoneEl=this.querySelector(`#conv-dropzone`),this.idleStateEl=this.querySelector(`#conv-idle-state`),this.previewStateEl=this.querySelector(`#conv-preview-state`),this.previewImgEl=this.querySelector(`#conv-preview-img`),this.sourceNameEl=this.querySelector(`#source-name`),this.sourceSizeEl=this.querySelector(`#source-size`),this.removeBtn=this.querySelector(`#btn-remove-conv`),this.actionsEl=this.querySelector(`#actions-panel`),this.convertBtn=this.querySelector(`#btn-convert`),this.resultsEl=this.querySelector(`#results-panel`),this.statsOrigSizeEl=this.querySelector(`#stats-orig-size`),this.statsConvSizeEl=this.querySelector(`#stats-conv-size`),this.downloadBtn=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetConverter()}),this.convertBtn.addEventListener(`click`,()=>this.runConversion())}handleFileSelect(t){if(this.fromType!==`*`&&!t.type.startsWith(`image/`)&&!t.name.endsWith(`.svg`)){alert(`Invalid file format.`);return}this.selectedFile=t,this.sourceNameEl.textContent=t.name,this.sourceSizeEl.textContent=e(t.size);let n=new FileReader;n.onload=e=>{this.previewImgEl.src=e.target?.result,this.idleStateEl.classList.add(`hidden`),this.previewStateEl.classList.remove(`hidden`),this.actionsEl.classList.remove(`hidden`),this.resultsEl.classList.add(`hidden`)},n.readAsDataURL(t)}resetConverter(){this.selectedFile=null,this.convertedBlob=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.idleStateEl.classList.remove(`hidden`),this.previewStateEl.classList.add(`hidden`),this.actionsEl.classList.add(`hidden`),this.resultsEl.classList.add(`hidden`)}runConversion(){if(!this.selectedFile)return;let t=new Image;t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);r&&(this.toType===`image/jpeg`&&(r.fillStyle=`#FFFFFF`,r.fillRect(0,0,n.width,n.height)),r.drawImage(t,0,0),n.toBlob(t=>{if(!t)return;this.convertedBlob=t,this.statsOrigSizeEl.textContent=e(this.selectedFile.size),this.statsConvSizeEl.textContent=e(t.size);let n=URL.createObjectURL(t);this.downloadBtn.href=n;let r=this.selectedFile.name.substring(0,this.selectedFile.name.lastIndexOf(`.`));this.downloadBtn.download=`${r}.${this.toExt}`,this.resultsEl.classList.remove(`hidden`),this.resultsEl.scrollIntoView({behavior:`smooth`})},this.toType,.95))},t.src=this.previewImgEl.src}};customElements.get(`jpg-png-tool`)||customElements.define(`jpg-png-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/image-to-text-ocr/ui.astro?astro&type=script&index=0&lang.ts","var e=class extends HTMLElement{fileInputEl;dropzoneEl;previewWrapperEl;previewImgEl;removeImgBtn;extractBtn;outputEl;progressContainerEl;progressBarEl;progressStatusEl;copyBtn;downloadBtn;langSelectEl;selectedFile=null;connectedCallback(){this.fileInputEl=this.querySelector(`#ocr-file-input`),this.dropzoneEl=this.querySelector(`#ocr-dropzone`),this.previewWrapperEl=this.querySelector(`#preview-wrapper`),this.previewImgEl=this.querySelector(`#ocr-image-preview`),this.removeImgBtn=this.querySelector(`#btn-remove-img`),this.extractBtn=this.querySelector(`#btn-extract`),this.outputEl=this.querySelector(`#ocr-output`),this.progressContainerEl=this.querySelector(`#ocr-progress-container`),this.progressBarEl=this.querySelector(`#ocr-progress-bar`),this.progressStatusEl=this.querySelector(`#ocr-progress-status`),this.copyBtn=this.querySelector(`#btn-copy-ocr`),this.downloadBtn=this.querySelector(`#btn-download-ocr`),this.langSelectEl=this.querySelector(`#ocr-lang`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeImgBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetImage()}),this.extractBtn.addEventListener(`click`,()=>this.runOCR()),this.copyBtn.addEventListener(`click`,()=>{navigator.clipboard.writeText(this.outputEl.value);let e=this.copyBtn.innerHTML;this.copyBtn.textContent=`Copied!`,this.copyBtn.classList.add(`copied-btn`),setTimeout(()=>{this.copyBtn.innerHTML=e,this.copyBtn.classList.remove(`copied-btn`)},1500)}),this.downloadBtn.addEventListener(`click`,()=>{let e=this.outputEl.value,t=new Blob([e],{type:`text/plain;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`extracted-text-${Date.now()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)})}handleFileSelect(e){if(!e.type.startsWith(`image/`)){alert(`Please drop or select a valid image file.`);return}this.selectedFile=e;let t=new FileReader;t.onload=e=>{this.previewImgEl.src=e.target?.result,this.previewWrapperEl.classList.remove(`hidden`),this.extractBtn.disabled=!1},t.readAsDataURL(e)}resetImage(){this.selectedFile=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.previewWrapperEl.classList.add(`hidden`),this.extractBtn.disabled=!0,this.outputEl.value=``,this.copyBtn.disabled=!0,this.downloadBtn.disabled=!0,this.progressContainerEl.classList.add(`hidden`)}async runOCR(){if(this.selectedFile){this.outputEl.value=``,this.copyBtn.disabled=!0,this.downloadBtn.disabled=!0,this.progressContainerEl.classList.remove(`hidden`),this.extractBtn.disabled=!0,this.langSelectEl.value;try{let e=await Tesseract.createWorker({logger:e=>{if(e.status===`recognizing text`){let t=Math.round(e.progress*100);this.progressBarEl.style.width=`${t}%`,this.progressStatusEl.textContent=`Extracting Text: ${t}%`}else this.progressStatusEl.textContent=e.status}}),t=await e.recognize(this.selectedFile);await e.terminate();let n=t.data.text.trim();this.outputEl.value=n||`No text found in the image.`,this.copyBtn.disabled=!n,this.downloadBtn.disabled=!n,this.progressStatusEl.textContent=`Extraction complete!`,this.progressBarEl.style.width=`100%`}catch(e){console.error(`OCR Error`,e),this.progressStatusEl.textContent=`OCR Error. Please try again.`}finally{this.extractBtn.disabled=!1}}}};customElements.get(`image-ocr-tool`)||customElements.define(`image-ocr-tool`,e);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/url-encoder-decoder/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=`all`){return e?t===`all`?encodeURIComponent(e):encodeURI(e):``}function t(e){if(!e)return``;try{return decodeURIComponent(e.replace(/\\+/g,`%20`))}catch{throw Error(`Invalid percent-encoding sequence. Please check for incomplete or malformed % hex codes.`)}}var n=class extends HTMLElement{inputEl;outputEl;errorBannerEl;errorMessageEl;btnCopy;connectedCallback(){this.inputEl=this.querySelector(`#url-input`),this.outputEl=this.querySelector(`#url-output`),this.errorBannerEl=this.querySelector(`#url-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.btnCopy=this.querySelector(`#btn-copy`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`encode`&&this.handleEncode(),n===`decode`&&this.handleDecode(),n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>{this.inputEl.value.includes(`%`)?this.handleDecode(!0):this.handleEncode(!0)})}getMode(){return this.querySelector(`input[name=\"url-mode\"]:checked`)?.value||`all`}handleEncode(t=!1){let n=this.inputEl.value;if(!n.trim()){this.clearOutput();return}try{let t=e(n,this.getMode());this.outputEl.value=t,this.hideError()}catch(e){t||this.showError(`Encoding Error: ${e.message}`)}}handleDecode(e=!1){let n=this.inputEl.value;if(!n.trim()){this.clearOutput();return}try{let e=t(n);this.outputEl.value=e,this.hideError()}catch(t){e||this.showError(`Decoding Error: ${t.message}`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`https://example.com/search?query=hello world&category=developer tools!`,this.handleEncode()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.btnCopy.querySelector(`.copy-text`);this.btnCopy.classList.add(`copied`),t.textContent=`Copied!`,setTimeout(()=>{this.btnCopy.classList.remove(`copied`),t.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy text`,e)}}clearOutput(){this.outputEl.value=``,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.value=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`url-encoder-decoder-tool`)||customElements.define(`url-encoder-decoder-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/webp-to-png/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fromType;toType;toExt;fileInputEl;dropzoneEl;idleStateEl;previewStateEl;previewImgEl;sourceNameEl;sourceSizeEl;removeBtn;actionsEl;convertBtn;resultsEl;statsOrigSizeEl;statsConvSizeEl;downloadBtn;selectedFile=null;convertedBlob=null;connectedCallback(){this.fromType=this.getAttribute(`data-from`)||`image/webp`,this.toType=this.getAttribute(`data-to`)||`image/png`,this.toExt=this.getAttribute(`data-ext`)||`png`,this.fileInputEl=this.querySelector(`#conv-file-input`),this.dropzoneEl=this.querySelector(`#conv-dropzone`),this.idleStateEl=this.querySelector(`#conv-idle-state`),this.previewStateEl=this.querySelector(`#conv-preview-state`),this.previewImgEl=this.querySelector(`#conv-preview-img`),this.sourceNameEl=this.querySelector(`#source-name`),this.sourceSizeEl=this.querySelector(`#source-size`),this.removeBtn=this.querySelector(`#btn-remove-conv`),this.actionsEl=this.querySelector(`#actions-panel`),this.convertBtn=this.querySelector(`#btn-convert`),this.resultsEl=this.querySelector(`#results-panel`),this.statsOrigSizeEl=this.querySelector(`#stats-orig-size`),this.statsConvSizeEl=this.querySelector(`#stats-conv-size`),this.downloadBtn=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetConverter()}),this.convertBtn.addEventListener(`click`,()=>this.runConversion())}handleFileSelect(t){if(this.fromType!==`*`&&!t.type.startsWith(`image/`)){alert(`Invalid file format.`);return}this.selectedFile=t,this.sourceNameEl.textContent=t.name,this.sourceSizeEl.textContent=e(t.size);let n=new FileReader;n.onload=e=>{this.previewImgEl.src=e.target?.result,this.idleStateEl.classList.add(`hidden`),this.previewStateEl.classList.remove(`hidden`),this.actionsEl.classList.remove(`hidden`),this.resultsEl.classList.add(`hidden`)},n.readAsDataURL(t)}resetConverter(){this.selectedFile=null,this.convertedBlob=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.idleStateEl.classList.remove(`hidden`),this.previewStateEl.classList.add(`hidden`),this.actionsEl.classList.add(`hidden`),this.resultsEl.classList.add(`hidden`)}runConversion(){if(!this.selectedFile)return;let t=new Image;t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);r&&(r.drawImage(t,0,0),n.toBlob(t=>{if(!t)return;this.convertedBlob=t,this.statsOrigSizeEl.textContent=e(this.selectedFile.size),this.statsConvSizeEl.textContent=e(t.size);let n=URL.createObjectURL(t);this.downloadBtn.href=n;let r=this.selectedFile.name.substring(0,this.selectedFile.name.lastIndexOf(`.`));this.downloadBtn.download=`${r}.${this.toExt}`,this.resultsEl.classList.remove(`hidden`),this.resultsEl.scrollIntoView({behavior:`smooth`})},this.toType))},t.src=this.previewImgEl.src}};customElements.get(`webp-png-tool`)||customElements.define(`webp-png-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/unicode-to-text-converter/ui.astro?astro&type=script&index=0&lang.ts","function e(e){if(!e)return``;let t=e;t=t.replace(/\\\\u\\{([0-9a-fA-F]+)\\}/g,(e,t)=>String.fromCodePoint(parseInt(t,16))),t=t.replace(/\\\\u([0-9a-fA-F]{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16))),t=t.replace(/&#x([0-9a-fA-F]+);/g,(e,t)=>String.fromCodePoint(parseInt(t,16))),t=t.replace(/&#([0-9]+);/g,(e,t)=>String.fromCodePoint(parseInt(t,10))),t=t.replace(/%u([0-9a-fA-F]{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16)));try{t=decodeURIComponent(t)}catch{}return t=t.replace(/U\\+([0-9a-fA-F]{4,6})/g,(e,t)=>String.fromCodePoint(parseInt(t,16))),t=t.replace(/\\\\([0-9a-fA-F]{1,6})\\s?/g,(e,t)=>String.fromCodePoint(parseInt(t,16))),t}function t(e,t=`js`){return e?Array.from(e).map(e=>{let n=e.codePointAt(0);if(n===void 0)return``;switch(t){case`js`:return n<=65535?`\\\\u`+n.toString(16).padStart(4,`0`):`\\\\u{`+n.toString(16)+`}`;case`js-brace`:return`\\\\u{`+n.toString(16)+`}`;case`html-dec`:return`&#${n};`;case`html-hex`:return`&#x${n.toString(16)};`;case`css`:return`\\\\`+n.toString(16).padStart(4,`0`)+` `;case`u-plus`:return`U+`+n.toString(16).toUpperCase().padStart(4,`0`);default:return e}}).join(``):``}var n=class extends HTMLElement{inputEl;outputEl;inputPaneTitle;outputPaneTitle;formatGroupEl;formatSelectEl;mode=`decode`;connectedCallback(){this.inputEl=this.querySelector(`#converter-input`),this.outputEl=this.querySelector(`#converter-output`),this.inputPaneTitle=this.querySelector(`#input-pane-title`),this.outputPaneTitle=this.querySelector(`#output-pane-title`),this.formatGroupEl=this.querySelector(`#format-group`),this.formatSelectEl=this.querySelector(`#unicode-format-select`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample();let r=t.getAttribute(`data-mode`);r&&this.setMode(r)}),this.inputEl.addEventListener(`input`,()=>this.processConversion()),this.formatSelectEl.addEventListener(`change`,()=>this.processConversion())}setMode(e){if(this.mode===e)return;this.mode=e,this.querySelectorAll(`.toggle-btn`).forEach(t=>{t.getAttribute(`data-mode`)===e?(t.classList.add(`active`),t.setAttribute(`aria-checked`,`true`)):(t.classList.remove(`active`),t.setAttribute(`aria-checked`,`false`))}),e===`encode`?(this.inputPaneTitle.textContent=`Plain Text Input`,this.outputPaneTitle.textContent=`Unicode Output`,this.inputEl.placeholder=`Type or paste content here...`,this.outputEl.placeholder=`Unicode escapes will appear here...`,this.formatGroupEl.style.display=`flex`):(this.inputPaneTitle.textContent=`Unicode Input`,this.outputPaneTitle.textContent=`Plain Text Output`,this.inputEl.placeholder=`Paste Unicode escape codes here...`,this.outputEl.placeholder=`Plain text output will appear here...`,this.formatGroupEl.style.display=`none`);let t=this.inputEl.value,n=this.outputEl.value;this.inputEl.value=n,this.outputEl.value=t,this.processConversion()}processConversion(){let n=this.inputEl.value;if(!n){this.clearOutput();return}if(this.mode===`encode`){let e=this.formatSelectEl.value,r=t(n,e);this.outputEl.value=r}else{let t=e(n);this.outputEl.value=t}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){this.mode===`encode`?this.inputEl.value=`Hello World! 🌎`:this.inputEl.value=`Hello \\\\u{1f30e}! HTML entities: &#76;&#111;&#119;&#75;&#101;&#121;`,this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}clearOutput(){this.outputEl.value=``}};customElements.get(`unicode-converter-tool`)||customElements.define(`unicode-converter-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/jpg-to-webp/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=2){if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}var t=class extends HTMLElement{fromType;toType;toExt;fileInputEl;dropzoneEl;idleStateEl;previewStateEl;previewImgEl;sourceNameEl;sourceSizeEl;removeBtn;actionsEl;convertBtn;resultsEl;statsOrigSizeEl;statsConvSizeEl;downloadBtn;selectedFile=null;convertedBlob=null;connectedCallback(){this.fromType=this.getAttribute(`data-from`)||`image/jpeg`,this.toType=this.getAttribute(`data-to`)||`image/webp`,this.toExt=this.getAttribute(`data-ext`)||`webp`,this.fileInputEl=this.querySelector(`#conv-file-input`),this.dropzoneEl=this.querySelector(`#conv-dropzone`),this.idleStateEl=this.querySelector(`#conv-idle-state`),this.previewStateEl=this.querySelector(`#conv-preview-state`),this.previewImgEl=this.querySelector(`#conv-preview-img`),this.sourceNameEl=this.querySelector(`#source-name`),this.sourceSizeEl=this.querySelector(`#source-size`),this.removeBtn=this.querySelector(`#btn-remove-conv`),this.actionsEl=this.querySelector(`#actions-panel`),this.convertBtn=this.querySelector(`#btn-convert`),this.resultsEl=this.querySelector(`#results-panel`),this.statsOrigSizeEl=this.querySelector(`#stats-orig-size`),this.statsConvSizeEl=this.querySelector(`#stats-conv-size`),this.downloadBtn=this.querySelector(`#btn-download`),this.dropzoneEl.addEventListener(`dragover`,e=>{e.preventDefault(),this.dropzoneEl.classList.add(`dragover`)}),this.dropzoneEl.addEventListener(`dragleave`,()=>{this.dropzoneEl.classList.remove(`dragover`)}),this.dropzoneEl.addEventListener(`drop`,e=>{e.preventDefault(),this.dropzoneEl.classList.remove(`dragover`),e.dataTransfer?.files&&e.dataTransfer.files.length>0&&this.handleFileSelect(e.dataTransfer.files[0])}),this.fileInputEl.addEventListener(`change`,()=>{this.fileInputEl.files&&this.fileInputEl.files.length>0&&this.handleFileSelect(this.fileInputEl.files[0])}),this.removeBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.resetConverter()}),this.convertBtn.addEventListener(`click`,()=>this.runConversion())}handleFileSelect(t){if(this.fromType!==`*`&&!t.type.startsWith(`image/`)){alert(`Invalid file format.`);return}this.selectedFile=t,this.sourceNameEl.textContent=t.name,this.sourceSizeEl.textContent=e(t.size);let n=new FileReader;n.onload=e=>{this.previewImgEl.src=e.target?.result,this.idleStateEl.classList.add(`hidden`),this.previewStateEl.classList.remove(`hidden`),this.actionsEl.classList.remove(`hidden`),this.resultsEl.classList.add(`hidden`)},n.readAsDataURL(t)}resetConverter(){this.selectedFile=null,this.convertedBlob=null,this.fileInputEl.value=``,this.previewImgEl.src=``,this.idleStateEl.classList.remove(`hidden`),this.previewStateEl.classList.add(`hidden`),this.actionsEl.classList.add(`hidden`),this.resultsEl.classList.add(`hidden`)}runConversion(){if(!this.selectedFile)return;let t=new Image;t.onload=()=>{let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);r&&(r.drawImage(t,0,0),n.toBlob(t=>{if(!t)return;this.convertedBlob=t,this.statsOrigSizeEl.textContent=e(this.selectedFile.size),this.statsConvSizeEl.textContent=e(t.size);let n=URL.createObjectURL(t);this.downloadBtn.href=n;let r=this.selectedFile.name.substring(0,this.selectedFile.name.lastIndexOf(`.`));this.downloadBtn.download=`${r}.${this.toExt}`,this.resultsEl.classList.remove(`hidden`),this.resultsEl.scrollIntoView({behavior:`smooth`})},this.toType,.9))},t.src=this.previewImgEl.src}};customElements.get(`jpg-webp-tool`)||customElements.define(`jpg-webp-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/json-unstringifier/ui.astro?astro&type=script&index=0&lang.ts","function e(e){return e.replace(/\\\\\"/g,`\"`).replace(/\\\\\\\\/g,`\\\\`).replace(/\\\\n/g,`\n`).replace(/\\\\t/g,`\t`).replace(/\\\\r/g,`\\r`).replace(/\\\\b/g,`\\b`).replace(/\\\\f/g,`\\f`)}function t(t){let n=t.trim();if(!n)return{result:``,format:`text`};let r=``;for(;n!==r;){if(r=n,n.startsWith(`\"`)&&n.endsWith(`\"`)||n.startsWith(`'`)&&n.endsWith(`'`)){let e=n.slice(1,-1);try{let t=JSON.parse(e);if(typeof t==`object`&&t)return{result:JSON.stringify(t,null,2),format:`json`}}catch{}}if(n.startsWith(`\"`)&&n.endsWith(`\"`)||n.startsWith(`'`)&&n.endsWith(`'`))try{let e=n;e.startsWith(`'`)&&(e=`\"`+e.slice(1,-1).replace(/\"/g,`\\\\\"`).replace(/\\\\'/g,`'`)+`\"`);let t=JSON.parse(e);if(typeof t==`string`){n=t;continue}else return{result:JSON.stringify(t,null,2),format:`json`}}catch{}if(n.includes(`\\\\`)||n.includes(`\"`)){let t=e(n);if(t!==n){n=t;continue}}}try{let e=JSON.parse(n);if(typeof e==`object`&&e)return{result:JSON.stringify(e,null,2),format:`json`}}catch{}return{result:n,format:`text`}}var n=class extends HTMLElement{inputEl;outputEl;outputPaneTitle;errorBannerEl;errorMessageEl;connectedCallback(){this.inputEl=this.querySelector(`#unstringify-input`),this.outputEl=this.querySelector(`#unstringify-output`),this.outputPaneTitle=this.querySelector(`#output-pane-title`),this.errorBannerEl=this.querySelector(`#unstringify-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample()}),this.inputEl.addEventListener(`input`,()=>this.processConversion())}processConversion(){let e=this.inputEl.value;if(!e){this.clearOutput();return}try{let n=t(e);this.outputEl.value=n.result,n.format===`json`?this.outputPaneTitle.textContent=`Unescaped JSON (Formatted)`:this.outputPaneTitle.textContent=`Unescaped Plain Text`,this.hideError()}catch(e){this.showError(e.message||`Error occurred during processing.`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`\"{\\\\\"projectName\\\\\":\\\\\"Lowkeydevs\\\\\",\\\\\"version\\\\\":\\\\\"1.0.0\\\\\",\\\\\"tags\\\\\":[\\\\\"speed\\\\\",\\\\\"seo\\\\\",\\\\\"privacy\\\\\"],\\\\\"active\\\\\":true}\"`,this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}clearOutput(){this.outputEl.value=``,this.outputPaneTitle.textContent=`Unescaped Result`,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.value=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`json-unstringifier-tool`)||customElements.define(`json-unstringifier-tool`,n);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/json-stringify-text/ui.astro?astro&type=script&index=0&lang.ts","function e(e,t=`raw`){if(!e)return``;if(t===`json`)try{let t=JSON.parse(e),n=JSON.stringify(t);return JSON.stringify(n)}catch(e){throw Error(`Invalid JSON input: ${e.message}`)}else return JSON.stringify(e)}var t=class extends HTMLElement{inputEl;outputEl;inputPaneTitle;errorBannerEl;errorMessageEl;mode=`raw`;connectedCallback(){this.inputEl=this.querySelector(`#converter-input`),this.outputEl=this.querySelector(`#converter-output`),this.inputPaneTitle=this.querySelector(`#input-pane-title`),this.errorBannerEl=this.querySelector(`#converter-error-banner`),this.errorMessageEl=this.querySelector(`#error-message`),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`clear`&&this.handleClear(),n===`copy`&&this.handleCopy(),n===`load-sample`&&this.handleLoadSample();let r=t.getAttribute(`data-mode`);r&&this.setMode(r)}),this.inputEl.addEventListener(`input`,()=>this.processConversion())}setMode(e){this.mode!==e&&(this.mode=e,this.querySelectorAll(`.toggle-btn`).forEach(t=>{t.getAttribute(`data-mode`)===e?(t.classList.add(`active`),t.setAttribute(`aria-checked`,`true`)):(t.classList.remove(`active`),t.setAttribute(`aria-checked`,`false`))}),e===`raw`?(this.inputPaneTitle.textContent=`Raw Text Input`,this.inputEl.placeholder=`Type or paste content here...`):(this.inputPaneTitle.textContent=`JSON Object Input`,this.inputEl.placeholder=`Paste JSON object here...`),this.processConversion())}processConversion(){let t=this.inputEl.value;if(!t){this.clearOutput();return}try{let n=e(t,this.mode);this.outputEl.value=n,this.hideError()}catch(e){this.showError(e.message||`Error occurred during processing.`)}}handleClear(){this.inputEl.value=``,this.clearOutput(),this.inputEl.focus()}handleLoadSample(){if(this.mode===`raw`)this.inputEl.value=`Hello standard \"user\"!\nLet's test newlines and backslashes: \\\\path\\\\to\\\\dir`;else{let e={name:`Lowkeydevs`,escaped:!0,nested:{message:`Hello \"World\"!`}};this.inputEl.value=JSON.stringify(e,null,2)}this.processConversion()}async handleCopy(){let e=this.outputEl.value;if(e)try{await navigator.clipboard.writeText(e);let t=this.querySelector(`#btn-copy`),n=t.querySelector(`.copy-text`);t.classList.add(`copied`),n.textContent=`Copied!`,setTimeout(()=>{t.classList.remove(`copied`),n.textContent=`Copy`},2e3)}catch(e){console.error(`Failed to copy`,e)}}clearOutput(){this.outputEl.value=``,this.hideError()}showError(e){this.errorMessageEl.textContent=e,this.errorBannerEl.removeAttribute(`hidden`),this.outputEl.value=``}hideError(){this.errorBannerEl.setAttribute(`hidden`,`true`),this.errorMessageEl.textContent=``}};customElements.get(`json-stringify-tool`)||customElements.define(`json-stringify-tool`,t);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/invisible-text-generator/ui.astro?astro&type=script&index=0&lang.ts","var e={zwsp:`​`,zwnj:`‌`,zwj:`‍`,wj:`⁠`,\"invisible-sep\":`⁣`};function t(t,n){let r=e[t]||`​`,i=Math.max(1,Math.min(1e4,n));return r.repeat(i)}function n(e,t){if(!t)return e;let n=Array.from(t).map(e=>e.charCodeAt(0).toString(2).padStart(16,`0`)).join(``),r=Array.from(n).map(e=>e===`0`?`​`:`‌`).join(``);return e+`⁠⁠`+r+`⁠⁣`}function r(e){if(!e)return``;let t=e.match(/\\u2060\\u2060([\\u200B\\u200C]+)\\u2060\\u2063/),n=``;if(t)n=t[1];else{let t=e.match(/[\\u200B\\u200C]+/g);if(!t)return``;n=t.join(``)}if(!n)return``;let r=Array.from(n).map(e=>e===`​`?`0`:e===`‌`?`1`:``).join(``),i=``;for(let e=0;e<r.length;e+=16){let t=r.slice(e,e+16);t.length===16&&(i+=String.fromCharCode(parseInt(t,2)))}return i}var i=class extends HTMLElement{tabs;tabContents;blankTypeEl;blankCountEl;blankStatusEl;stegoCoverEl;stegoSecretEl;encodeStatusEl;encodeResultContainerEl;encodeOutputEl;stegoDecodeInputEl;decodeResultContainerEl;decodeOutputEl;connectedCallback(){this.tabs=Array.from(this.querySelectorAll(`.tab-btn`)),this.tabContents=[this.querySelector(`#tab-blank-gen`),this.querySelector(`#tab-stego-hide`),this.querySelector(`#tab-stego-reveal`)],this.blankTypeEl=this.querySelector(`#blank-char-type`),this.blankCountEl=this.querySelector(`#blank-count`),this.blankStatusEl=this.querySelector(`#blank-status`),this.stegoCoverEl=this.querySelector(`#stego-cover`),this.stegoSecretEl=this.querySelector(`#stego-secret`),this.encodeStatusEl=this.querySelector(`#encode-status`),this.encodeResultContainerEl=this.querySelector(`#encode-result-container`),this.encodeOutputEl=this.querySelector(`#encode-output`),this.stegoDecodeInputEl=this.querySelector(`#stego-decode-input`),this.decodeResultContainerEl=this.querySelector(`#decode-result-container`),this.decodeOutputEl=this.querySelector(`#decode-output`),this.tabs.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-tab`);this.tabs.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.tabContents.forEach(e=>{e.id===`tab-${t}`?e.style.display=`flex`:e.style.display=`none`})})}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);n===`generate-blank`&&this.handleGenerateBlank(),n===`encode`&&this.handleEncode(),n===`decode`&&this.handleDecode(),n===`clear-decode`&&this.handleClearDecode()})}async handleGenerateBlank(){let e=this.blankTypeEl.value,n=parseInt(this.blankCountEl.value)||10,r=t(e,n);try{await navigator.clipboard.writeText(r),this.blankStatusEl.textContent=`Generated & Copied ${n} blank characters!`,setTimeout(()=>{this.blankStatusEl.textContent=``},3e3)}catch(e){console.error(`Failed to copy blank characters`,e),this.blankStatusEl.textContent=`Failed to copy to clipboard.`}}async handleEncode(){let e=this.stegoCoverEl.value||` `,t=this.stegoSecretEl.value;if(!t){this.encodeStatusEl.textContent=`Please enter a secret message to hide!`,this.encodeStatusEl.style.color=`var(--error-color)`;return}let r=n(e,t);this.encodeOutputEl.value=r,this.encodeResultContainerEl.style.display=`flex`;try{await navigator.clipboard.writeText(r),this.encodeStatusEl.textContent=`Encoded & Copied to clipboard!`,this.encodeStatusEl.style.color=`var(--success-color)`,setTimeout(()=>{this.encodeStatusEl.textContent=``},3e3)}catch(e){console.error(`Failed to copy encoded message`,e),this.encodeStatusEl.textContent=`Encoded successfully! Copy output below.`,this.encodeStatusEl.style.color=`var(--text-primary)`}}handleDecode(){let e=this.stegoDecodeInputEl.value;if(!e){this.decodeOutputEl.value=`Please paste some text to inspect.`,this.decodeResultContainerEl.style.display=`flex`;return}let t=r(e);t?this.decodeOutputEl.value=t:this.decodeOutputEl.value=`No hidden message found in this text.`,this.decodeResultContainerEl.style.display=`flex`}handleClearDecode(){this.stegoDecodeInputEl.value=``,this.decodeOutputEl.value=``,this.decodeResultContainerEl.style.display=`none`,this.stegoDecodeInputEl.focus()}};customElements.get(`invisible-text-tool`)||customElements.define(`invisible-text-tool`,i);"],["C:/Users/gurpr/lowkeydevs/src/tools/list/wide-text-generator/ui.astro?astro&type=script&index=0&lang.ts","function e(e){return e.split(``).map(e=>{let t=e.charCodeAt(0);return t>=33&&t<=126?String.fromCharCode(t+65248):t===32?`　`:e}).join(``)}function t(t,n=` `,r=1){if(!t)return[];let i=e(t),a=t.split(``).filter(e=>e!==` `).join(` `.repeat(r)),o=t.split(``).filter(e=>e!==` `).join(n.repeat(r)),s=e(t.toUpperCase());return[{name:`Fullwidth (Unicode)`,text:i},{name:`Vaporwave (Fullwidth UPPERCASE)`,text:s},{name:`Custom Spacing (Spacer: \"${n}\", Count: ${r})`,text:o},{name:`Standard Wide Spaced`,text:a},{name:`Double Spaced`,text:t.split(``).join(`  `)}]}var n=class extends HTMLElement{inputEl;spacerSelectEl;customSpacerEl;spacerCountEl;countValEl;primaryDisplayEl;resultsEl;copyMainBtn;connectedCallback(){this.inputEl=this.querySelector(`#wide-input`),this.spacerSelectEl=this.querySelector(`#wide-spacer-select`),this.customSpacerEl=this.querySelector(`#wide-custom-spacer`),this.spacerCountEl=this.querySelector(`#wide-spacer-count`),this.countValEl=this.querySelector(`#spacer-count-val`),this.primaryDisplayEl=this.querySelector(`#wide-primary-display`),this.resultsEl=this.querySelector(`#wide-results`),this.copyMainBtn=this.querySelector(`#wide-main-copy`),this.inputEl.addEventListener(`input`,()=>this.handleUpdate()),this.spacerCountEl.addEventListener(`input`,()=>{this.countValEl.textContent=this.spacerCountEl.value,this.handleUpdate()}),this.spacerSelectEl.addEventListener(`change`,()=>{this.spacerSelectEl.value===`custom`?(this.customSpacerEl.classList.remove(`hidden`),this.customSpacerEl.focus()):this.customSpacerEl.classList.add(`hidden`),this.handleUpdate()}),this.customSpacerEl.addEventListener(`input`,()=>this.handleUpdate()),this.copyMainBtn.addEventListener(`click`,()=>{let e=this.primaryDisplayEl.textContent||``;this.copyToClipboard(this.copyMainBtn,e)}),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);if(n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),t.classList.contains(`btn-copy`)){let e=parseInt(t.getAttribute(`data-index`)||`0`);this.handleCopy(t,e)}}),this.handleLoadSample()}getSpacer(){let e=this.spacerSelectEl.value;return e===`custom`?this.customSpacerEl.value||` `:e}handleUpdate(){let n=this.inputEl.value,r=this.getSpacer(),i=parseInt(this.spacerCountEl.value||`1`);if(!n){this.primaryDisplayEl.textContent=`ａｅｓｔｈｅｔｉｃ`,this.resultsEl.innerHTML=`\n          <div class=\"empty-state\">\n            Type some text above to see wide text variations...\n          </div>\n        `;return}let a=e(n);this.primaryDisplayEl.textContent=a;let o=t(n,r,i);this.resultsEl.innerHTML=o.map((e,t)=>`\n        <div class=\"result-card\">\n          <div class=\"result-info\">\n            <span class=\"result-label\">${e.name}</span>\n            <div class=\"result-text\" id=\"wide-text-${t}\">${this.escapeHtml(e.text)}</div>\n          </div>\n          <button class=\"btn btn-secondary btn-sm btn-copy\" data-index=\"${t}\" aria-label=\"Copy ${e.name}\">\n            Copy\n          </button>\n        </div>\n      `).join(``)}handleClear(){this.inputEl.value=``,this.handleUpdate(),this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`aesthetic`,this.handleUpdate()}async copyToClipboard(e,t){if(t)try{await navigator.clipboard.writeText(t);let n=e.innerHTML;e.textContent=`Copied!`,e.classList.add(`copied-btn`),setTimeout(()=>{e.innerHTML=n,e.classList.remove(`copied-btn`)},1500)}catch(e){console.error(`Copy failed`,e)}}async handleCopy(e,t){let n=this.querySelector(`#wide-text-${t}`);if(!n)return;let r=n.textContent||``;this.copyToClipboard(e,r)}escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}};customElements.get(`wide-text-tool`)||customElements.define(`wide-text-tool`,n);"]],"assets":["/android-chrome-192.png","/android-chrome-512.png","/apple-touch-icon.png","/favicon.ico","/favicon.svg","/og-default.png","/safari-pinned-tab.svg","/site.webmanifest","/_astro/logic.C9uJDu47.js","/_astro/SuggestFeatureButton.astro_astro_type_script_index_0_lang.Ck2aPhtq.js","/_astro/SuggestFeatureModal.C76nxZsr.js","/_astro/ui.astro_astro_type_script_index_0_lang.7p0AWUNW.js","/_astro/ui.astro_astro_type_script_index_0_lang.B2qA3m7w.js","/_astro/ui.astro_astro_type_script_index_0_lang.B3luu_Wa.js","/_astro/ui.astro_astro_type_script_index_0_lang.BBrs-uX_.js","/_astro/ui.astro_astro_type_script_index_0_lang.BcWd9krx.js","/_astro/ui.astro_astro_type_script_index_0_lang.BEwt-lLd.js","/_astro/ui.astro_astro_type_script_index_0_lang.BfN3GyfY.js","/_astro/ui.astro_astro_type_script_index_0_lang.Bj0cWkh8.js","/_astro/ui.astro_astro_type_script_index_0_lang.BM1OZoJs.js","/_astro/ui.astro_astro_type_script_index_0_lang.BP0Rsb7D.js","/_astro/ui.astro_astro_type_script_index_0_lang.BTEeWRUL.js","/_astro/ui.astro_astro_type_script_index_0_lang.BVByh8ov.js","/_astro/ui.astro_astro_type_script_index_0_lang.BvDno1vb.js","/_astro/ui.astro_astro_type_script_index_0_lang.BwdTrq3i.js","/_astro/ui.astro_astro_type_script_index_0_lang.Byk6pAhn.js","/_astro/ui.astro_astro_type_script_index_0_lang.C3mz0nvY.js","/_astro/ui.astro_astro_type_script_index_0_lang.C9TlI0oe.js","/_astro/ui.astro_astro_type_script_index_0_lang.CDrYj5nb.js","/_astro/ui.astro_astro_type_script_index_0_lang.Cgjq50AO.js","/_astro/ui.astro_astro_type_script_index_0_lang.CikpLHBr.js","/_astro/ui.astro_astro_type_script_index_0_lang.CJecJuXR.js","/_astro/ui.astro_astro_type_script_index_0_lang.CK9vLDfO.js","/_astro/ui.astro_astro_type_script_index_0_lang.CmIPW99N.js","/_astro/ui.astro_astro_type_script_index_0_lang.COJctm0Q.js","/_astro/ui.astro_astro_type_script_index_0_lang.COn0qO18.js","/_astro/ui.astro_astro_type_script_index_0_lang.COTr-Pvw.js","/_astro/ui.astro_astro_type_script_index_0_lang.CriwpRCg.js","/_astro/ui.astro_astro_type_script_index_0_lang.DjEF8Ed3.js","/_astro/ui.astro_astro_type_script_index_0_lang.DMR_Iseq.js","/_astro/ui.astro_astro_type_script_index_0_lang.DsbbLi4b.js","/_astro/ui.astro_astro_type_script_index_0_lang.DTITK-cs.js","/_astro/ui.astro_astro_type_script_index_0_lang.DUk_lzY-.js","/_astro/ui.astro_astro_type_script_index_0_lang.Dw-fxdTx.js","/_astro/ui.astro_astro_type_script_index_0_lang.DYakdec5.js","/_astro/ui.astro_astro_type_script_index_0_lang.DYpiXJCV.js","/_astro/ui.astro_astro_type_script_index_0_lang.eqRx6G_O.js","/_astro/ui.astro_astro_type_script_index_0_lang.gCX9U7C1.js","/_astro/ui.astro_astro_type_script_index_0_lang.gi2lxrTI.js","/_astro/ui.astro_astro_type_script_index_0_lang.jzm5sif6.js","/_astro/ui.astro_astro_type_script_index_0_lang.OL9LzLSC.js","/_astro/ui.astro_astro_type_script_index_0_lang.PyCdiDhb.js","/_astro/ui.astro_astro_type_script_index_0_lang.q8JC-Ixy.js","/_astro/ui2.astro_astro_type_script_index_0_lang.74slChHw.js","/_astro/ui2.astro_astro_type_script_index_0_lang.B-7TmZHm.js","/_astro/ui2.astro_astro_type_script_index_0_lang.BIcZ3Qz5.js","/_astro/ui2.astro_astro_type_script_index_0_lang.Bo8wAQ9W.js","/_astro/ui2.astro_astro_type_script_index_0_lang.BwPrZ2vr.js","/_astro/ui2.astro_astro_type_script_index_0_lang.C4DwUeE1.js","/_astro/ui2.astro_astro_type_script_index_0_lang.C6F67SFd.js","/_astro/ui2.astro_astro_type_script_index_0_lang.CLQS2SXp.js","/_astro/ui2.astro_astro_type_script_index_0_lang.CS5DP05X.js","/_astro/ui2.astro_astro_type_script_index_0_lang.CxW-BtlL.js","/_astro/ui2.astro_astro_type_script_index_0_lang.DNNWytsP.js","/_astro/ui2.astro_astro_type_script_index_0_lang.DRVDv3Qo.js","/_astro/ui2.astro_astro_type_script_index_0_lang.DuHaNp-X.js","/_astro/ui2.astro_astro_type_script_index_0_lang.DWrBEOEU.js","/_astro/ui2.astro_astro_type_script_index_0_lang.FJQKCR1t.js","/_astro/ui2.astro_astro_type_script_index_0_lang.pMpy4Yuh.js","/_astro/ui2.astro_astro_type_script_index_0_lang.yKzR3GCl.js","/_astro/unicode.DiooRdWd.js","/_astro/AdPlaceholder.B1ACx3Q9.css","/_astro/Footer.GxZLP3qz.css","/_astro/index.BSi9drsa.css","/_astro/_slug_.DURAKeje.css","/_astro/suggestions.HvTyoxYf.css","/about/index.html","/privacy/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"actionBodySizeLimit":1048576,"serverIslandBodySizeLimit":1048576,"allowedDomains":[],"key":"QSRiG3NcOUMHtUidOwYs4Cy0ur4kP82HVJd83KZ+PUM=","image":{},"devToolbar":{"enabled":false,"debugInfoOutput":""},"logLevel":"info","shouldInjectCspMetaTags":false});
var manifestRoutes = _manifest.routes;
var manifest = Object.assign(_manifest, {
	renderers,
	actions: () => import("./chunks/noop-entrypoint_Z3zFhrGC.mjs"),
	middleware: () => import("./virtual_astro_middleware.mjs"),
	sessionDriver: () => import("./chunks/_virtual_astro_session-driver_C-PI1Pas.mjs"),
	serverIslandMappings: () => import("./chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs"),
	routes: manifestRoutes,
	pageMap
});
//#endregion
//#region node_modules/astro/dist/core/app/entrypoints/virtual/prod.js
var createApp$1 = ({ streaming } = {}) => {
	const app = new App(manifest, streaming);
	app.setFetchHandler(_virtual_astro_fetchable_default);
	return app;
};
//#endregion
//#region node_modules/astro/dist/core/app/entrypoints/virtual/index.js
var createApp = createApp$1;
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/request.js
function getFirstForwardedValue(multiValueHeader) {
	return multiValueHeader?.toString()?.split(",").map((e) => e.trim())?.[0];
}
var IP_RE = /^[0-9a-fA-F.:]{1,45}$/;
function isValidIpAddress(value) {
	return IP_RE.test(value);
}
function getValidatedIpFromHeader(headerValue) {
	const raw = getFirstForwardedValue(headerValue);
	if (raw && isValidIpAddress(raw)) return raw;
}
function getClientIpAddress(request) {
	return getValidatedIpFromHeader(request.headers.get("x-forwarded-for"));
}
var app = createApp();
var entrypoint_default = { async fetch(request) {
	const url = new URL(request.url);
	const hasValidMiddlewareSecret = request.headers.get(ASTRO_MIDDLEWARE_SECRET_HEADER) === middlewareSecret;
	let realPath = void 0;
	if (hasValidMiddlewareSecret) realPath = request.headers.get(ASTRO_PATH_HEADER);
	else if (request.headers.get("x-vercel-isr") === "1") realPath = url.searchParams.get(ASTRO_PATH_PARAM);
	if (typeof realPath === "string") {
		url.pathname = realPath;
		request = new Request(url.toString(), {
			method: request.method,
			headers: request.headers,
			...request.body ? {
				body: request.body,
				duplex: "half"
			} : {}
		});
	}
	const routeData = app.match(request);
	let locals = {};
	const astroLocalsHeader = request.headers.get(ASTRO_LOCALS_HEADER);
	if (astroLocalsHeader) {
		if (!hasValidMiddlewareSecret) return new Response("Forbidden", { status: 403 });
		locals = JSON.parse(astroLocalsHeader);
	}
	if (hasValidMiddlewareSecret) request.headers.delete(ASTRO_MIDDLEWARE_SECRET_HEADER);
	const response = await app.render(request, {
		routeData,
		clientAddress: getClientIpAddress(request),
		locals
	});
	if (app.setCookieHeaders) for (const setCookieHeader of app.setCookieHeaders(response)) response.headers.append("Set-Cookie", setCookieHeader);
	return response;
} };
//#endregion
export { entrypoint_default as default };
