'use client'

import APIDocumentation from '@/components/apidocumentation';

export default function Documentation() {

    return (
        <div>
            <div className="flex flex-row h-100 mt-40 pl-8 p-4">
                <div className="w-1/5 bg-gray-200 p-4 sticky h-screen invisible sm:visible">
                    <h1 className="text-lg font-bold mb-4 text-indigo-500">API Index</h1>
                    <ul className="space-y-2">
                        <li><a href="#authentication" className="text-blue-500 hover:underline">API authentication</a></li>
                        <li><a href="#endpoint" className="text-blue-500 hover:underline">API endpoints</a></li>
                        <li><a href="#create-stream" className="text-blue-500 hover:underline">PUT /v1/stream</a></li>
                        <li><a href="#get-stream" className="text-blue-500 hover:underline">GET /v1/stream</a></li>
                        <li><a href="#create-rule" className="text-blue-500 hover:underline">PUT /v1/rule</a></li>
                        <li><a href="#get-rule" className="text-blue-500 hover:underline">GET /v1/rule</a></li>
                        <li><a href="#update-stream" className="text-blue-500 hover:underline">POST /v1/stream</a></li>
                        <li><a href="#evaluate-stream" className="text-blue-500 hover:underline">POST /v1/rule/evaluate</a></li>
                    </ul>
                </div>
                <div className="w-4/5 p-4 h-screen overflow-auto">
                    <h1 className="text-3xl font-bold mb-8 text-indigo-500">API Documentation</h1>
                    <section id="authentication" className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-indigo-400">Authentication</h2>
                        <p>Authenticate using a Bearer token in the header.</p>
                        <h3 className="text-lg font-bold mt-4">Header</h3>
                        <div className="whitespace-pre bg-gray-200 p-4 rounded-lg overflow-auto">
                            <code className='text-gray-800'>Token: &lt;your_token_here&gt;</code>
                        </div>
                    </section>

                    <section id="authentication" className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-indigo-400">API endpoints</h2>
                        <p>Use below API endpoint to test your APIs</p>
                        <h3 className="text-lg font-bold mt-4">Endpoints</h3>
                        <div className="whitespace-pre bg-gray-200 p-4 rounded-lg overflow-auto">
                            <code className='text-gray-800'>Staging: https://api.ruleeasy.in</code>
                            <br></br>
                            <code className='text-gray-800'>Production: Please get in touch with us</code>
                        </div>
                    </section>

                    <APIDocumentation id='create-stream'
                        method='PUT'
                        uri='/v1/stream'
                        title='Create a new stream'
                        description='One stream represents a homogenous collection of events (such as events in a message queue like Kafka). For example if we want to evaluate rules against all the payment events in your system, we can register JSON schema of one payment event like below. If stream creation is successfull, a unique ID is assigned to it. This stream ID could be used to view or update the stream in future if required.'
                        reqBody={`
{
    "name": "payment-transaction", // <Unique name of the stream>
    "schema": "{\"amount\":100,\"type\":\"credit_card\",\"user_id\":\"XXXX\",\"status\":\"PENDING\"}"
}
                    `}
                        respBody={`
{
    "success": {
        "code": 201004,
        "data": [
            {
                "id": "400d9f87-ba8d-4d8b-a2d9-2d713198c7e8", // Unique ID assigned to stream
                "name": "payment-transaction",
                "schema": "{\"amount\":100,\"type\":\"credit_card\",\"user_id\":\"XXXX\",\"status\":\"PENDING\"}",
                "schema_keys": [ // Schema fields that can be used while forming rules
                    "amount",
                    "status",
                    "type",
                    "user_id"
                ]
            }
        ]
    },
    "error": {
        "code": 0,
        "msg": ""
    }
}
                    `}></APIDocumentation>

                    <APIDocumentation id='get-stream'
                        method='GET'
                        uri='/v1/stream?id|name=<stream_id|stream_name>'
                        title='Get a stream by ID or name'
                        description='This API is used to view the schema registered for the stream, you can query the stream with a name or ID'
                        respBody={`
{
    "success": {
        "code": 201004,
        "data": [
            {
                "id": "400d9f87-ba8d-4d8b-a2d9-2d713198c7e8", // Unique ID assigned to stream
                "name": "payment-transaction",
                "schema": "{\"amount\":100,\"type\":\"credit_card\",\"user_id\":\"XXXX\",\"status\":\"PENDING\"}",
                "schema_keys": [ // Schema fields that can be used while forming rules
                    "amount",
                    "status",
                    "type",
                    "user_id"
                ]
            }
        ]
    },
    "error": {
        "code": 0,
        "msg": ""
    }
}
                    `}></APIDocumentation>

                    <APIDocumentation id='create-rule'
                        method='PUT'
                        uri='/v1/rule'
                        title='Create new rule'
                        description='A rule represents a logic that we want to evaluate for every event in the stream. The rules can be formed by making use of the fields present in the stream (ex: amount, type or status) in above example. Below rule evaluates if the transaction is a successful high value transaction done via credit card '
                        reqBody={`
{
    "name": "high-value-cc-txns",
    "data": [
        {
            "condition_data": "IF: { amount >= 1000 && type == \"credit_card\" && status == \"SUCCESS\" }",
            "action_data": "{ \"high-value-cc-txns\" : 1 }"
        }
    ]
}
                    `}
                        respBody={`
{
    "success": {
        "code": 201003,
        "data": {
            "id": "b62d7d71-e022-4bca-82ab-61152d92c70c", // Unique ID assigned to rule
            "name": "high-value-cc-txns",
            "data": [
                {
                    "id": "",
                    "condition_data": "IF: { amount >= 1000 && type == \"credit_card\" && status == \"SUCCESS\" }", // Rule condition
                    "action_data": "{ \"high-value-cc-txns\" : 1 }" // Rule action
                }
            ]
        }
    },
    "error": {
        "code": 0,
        "msg": ""
    }
}
                    `}></APIDocumentation>
                    <APIDocumentation id='get-rule'
                        method='GET'
                        uri='/v1/rule?id|name=<rule_id|rule_name>'
                        title='Get rule by ID or name'
                        description='This API is used to view the rule details (conditions and actions)'
                        respBody={`
{
    "success": {
        "code": 200000,
        "data": [
            {
                "id": "f4fdcd12-9cfe-45aa-aabd-b707e8dbf647",
                "name": "high-value-cc-txns",
                "data": [
                    {
                        "id": "79544c1a-634a-4c5f-971c-445b848c4a19",
                        "condition_data": "IF: { amount >= 1000 && type == "credit_card" && status == "SUCCESS" }",
                        "action_data": "{ "high-value-cc-txns" : 1 }"
                    }
                ]
            }
        ]
    },
    "error": {
        "code": 0,
        "msg": ""
    }
}
                    `}></APIDocumentation>

                    <APIDocumentation id='update-stream'
                        method='POST'
                        uri='/v1/stream?id=stream_id'
                        title='Updates a stream'
                        description='Multiple rules can be attached to a stream. For example, for the above created payment transaction stream we can create rules to identify high transactions, low transactions, fraud transactions etc. We can attach/dettatch a stream to a rule by means of this API.'
                        reqBody={`
{
    "stream_id":"400d9f87-ba8d-4d8b-a2d9-2d713198c7e8", // Stream ID
    "rule_id":"b62d7d71-e022-4bca-82ab-61152d92c70c", // Rule ID
    "status":1 // 1:Attach rule to stream, 2: Dettach rule from stream
}
                        `}
                        respBody={`
{
    "success": {
        "code": 200005
    },
    "error": {
        "code": 0,
        "msg": ""
    }
}
                    `}></APIDocumentation>

                    <APIDocumentation id='evaluate-stream'
                        method='POST'
                        uri='v1/rule/evaluate/{stream_id}'
                        title='Evaluate active rules of a stream'
                        description='Evaluates all the rules that are actively attached to the stream identified with id=stream_id'
                        reqBody={`
{
    "amount": 10000,
    "type": "credit_card",
    "user_id": "XXXX",
    "status": "SUCCESS"
}
                        `}
                        respBody={`
{
    "success": {
        "code": 200000,
        "data": {
            "success": [
                {
                    "rule_id": "c52d933d-4a28-46c4-80d6-c52564f5e5af",
                    "decision_id": "d4cd1f1b-28d5-41a8-98a3-9d88810ed3a2",
                    "result": "{ \"high-value-cc-txns\" : 1 }"
                }
            ],
            "failure": [
                {
                    "rule_id": "694cf416-d0bd-460e-b804-c11e2371a3cd",
                    "decision_id": "2e136611-76e5-4a04-8e95-00072ac4cb76",
                    "result": "{ \"low-value-txns\" : 1 }"
                }
            ]
        }
    },
    "error": {
        "code": 0,
        "msg": ""
    }
}
                    `}></APIDocumentation>

                </div>
            </div >
        </div>

    )
}
