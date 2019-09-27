"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var CelebrateErrorResponse_1 = __importDefault(require("./middlewares/CelebrateErrorResponse"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.static(__dirname + "/"));
// enable cors
app.use(cors_1.default());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
        return res.status(400).json({
            status: 400,
            message: 'check the http methods your using',
            accepted: 'PUT, POST, GET, DELETE'
        });
    }
    return next();
});
app.use('/api', index_1.default);
app.use(CelebrateErrorResponse_1.default());
app.use(function (req, res) {
    res.status(404).json({
        status: 404,
        message: 'Request not found',
        resolve: "review the your endpoint"
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map