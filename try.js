function addIntent(req, res, next) {
    
    
    
        const outputContextsName =  {
                name: contextsClient.contextPath(
                    req.body.projectId,
                    'abcd12345' /* sessionId */,
                    req.body.intent.outputContexts.name
                )
            }
    
        newIntent.intent.outputContexts.name = outputContextsName;
    
        const newIntent = {
            parent: intentsClient.projectAgentPath(req.body.projectId),
            intent: req.body.intent,
        };
    
        intentsClient
            .createIntent(newIntent)
            .then(responses => {
                res.send(responses[0]);
                // console.log('Created intent:', responses[0]);
                //   logIntent(responses[0]);
            })
            .catch(err => {
                res.send("Could not create the intent", err);
                // console.error('ERROR:', err);
            });
    }

addIntent(req, res)
 var req = {
    body: {
        "projectId": "faq-agent-98ae1",
        "intent": {
        "displayName": "Pizza",
        "events": [
          "order_pizza"
        ],
        "webhookState": "WEBHOOK_STATE_DISABLED",
        "trainingPhrases": [
          {
            "type": "TYPE_EXAMPLE",
            "parts": [
              {
                "text": "Order pizza"
              }
            ]
          },
          {
            "type": "TYPE_EXAMPLE",
            "parts": [
              {
                "text": "Pizza"
              }
            ]
          },
          {
            "type": "TYPE_EXAMPLE",
            "parts": [
              {
                "text": "Get me a "
              },
              {
                "text": "large",
                "entityType": "@size",
                "alias": "size"
              },
              {
                "text": " "
              },
              {
                "text": "mushrooms",
                "entityType": "@topping",
                "alias": "topping"
              },
              {
                "text": " for "
              },
              {
                "text": "1 1st st, New York, NY",
                "entityType": "@sys.location",
                "alias": "address"
              }
            ]
          },
          {
            "type": "TYPE_EXAMPLE",
            "parts": [
              {
                "text": "I'd like to order a "
              },
              {
                "text": "large",
                "entityType": "@size",
                "alias": "size"
              },
              {
                "text": " pizza with "
              },
              {
                "text": "mushrooms",
                "entityType": "@topping",
                "alias": "topping"
              }
            ]
          },
          {
            "type": "TYPE_TEMPLATE",
            "parts": [
              {
                "text": "I'd like a @size:size pizza"
              }
            ]
          }
        ],
        "mlEnabled": true,
        "priority": 500000,
        "action": "pizza",
        "parameters": [
          {
            "displayName": "size",
            "value": "$size",
            "entityTypeDisplayName": "@size",
            "mandatory": true,
            "prompts": [
              "What size pizza would you like to order?",
              "Would you like a large, medium, or small pizza?"
            ]
          },
          {
            "displayName": "topping",
            "value": "$topping",
            "entityTypeDisplayName": "@topping",
            "mandatory": true,
            "prompts": [
              "What toppings would you like?"
            ],
            "isList": true
          },
          {
            "displayName": "address",
            "value": "$address",
            "entityTypeDisplayName": "@sys.location",
            "mandatory": true,
            "prompts": [
              "What is the delivery address?"
            ]
          }
        ],
        "messages": [
          {
            "text": {
              "text": [
                "No problem. Getting a $size pizza with $topping and delivering ' + 'to $address."
              ]
            }
          },
          {
            "text": {
              "text": [
                "Reply \"check\" to place your order. Reply \"cancel\" to cancel ' +  'your order. You can change your delivery address as well."
              ]
            }
          },
          {
            "quickReplies": {
              "title": "No problem. Getting a $size pizza with $topping and ' +  'delivering to $address.",
              "quickReplies": [
                "Place order",
                "Cancel"
              ]
            },
            "platform": "PLATFORM_FACEBOOK"
          }
        ],
        "outputContexts": [
          {
            "name": "pizza_order",
            "lifespanCount": 5
          }
        ]
      }
    }

 }