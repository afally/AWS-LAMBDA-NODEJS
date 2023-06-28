// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  let response;

  try {
    const environmentalVariables = {
      handler: process.env._HANDLER,
      aws_region: process.env.AWS_REGION,
      aws_execution_env: process.env.AWS_EXECUTION_ENV,
      aws_lambda_function_name: process.env.AWS_LAMBDA_FUNCTION_NAME,
      aws_lambda_function_name: process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE,
      aws_lambda_function_version: process.env.AWS_LAMBDA_FUNCTION_VERSION,
      aws_lambda_log_group_name: process.env.AWS_LAMBDA_LOG_GROUP_NAME,
      aws_lambda_log_stream_name: process.env.AWS_LAMBDA_LOG_STREAM_NAME,
      aws_lambda_runtime_api: process.env.AWS_LAMBDA_RUNTIME_API,
      lang: process.env.LANG,
      tz: process.env.TZ,
      lambda_task_root: process.env.LAMBDA_TASK_ROOT,
      lambda_runtime_dir: process.env.LAMBDA_RUNTIME_DIR,
      path: process.env.PATH,
      ld_library_path: process.env.LD_LIBRARY_PATH,
    };

    response = {
      statusCode: 200,
      body: JSON.stringify(environmentalVariables),
    };
  } catch (err) {
    response = {
      statusCode: 500,
      error: err,
    };

    console.log(err);
  }

  return response;
};
