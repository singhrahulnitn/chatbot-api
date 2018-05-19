const dialogflow = require('dialogflow');

const intentsClient = new dialogflow.IntentsClient({
    keyFilename: 'FAQ-Agent-b4409a756b6a.json'
});

const entityTypesClient = new dialogflow.EntityTypesClient({
    keyFilename: 'FAQ-Agent-b4409a756b6a.json'
});

const agentPath = 'projects/faq-agent-98ae1/agent';

exports.addIntent = (req, res, next) => {
     console.log("Intren", req.body);

    const newIntent = {
        parent: agentPath,
        intent: req.body,
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
};

exports.getIntents = (req, res, next) => {
    var formattedParent = 'projects/faq-agent-98ae1/agent';

    intentsClient.listIntents({ parent: formattedParent })
        .then(responses => {
            // var resources = responses[0];
            // for (let i = 0; i < resources.length; i += 1) {
            //     console.log(resources[i], '\n')
            // }
            res.json(responses[0]);
        })
        .catch(err => {
            res.send("error getting intents", err);
            // console.error(err);
        });
};

exports.deleteIntent = (req, res, next) => {
    
    const request = {name: req.body.name};
    
    return intentsClient
      .deleteIntent(request)
      .then((res) => {
        console.log(`Intent deleted`);
        res.json(res);
      })
      .catch(err => {
          res.send(err);
        // console.error(`Failed to delete intent ${intent.displayName}:`, err);s
      });

}


exports.addEntity = (req, res, next) => {
    console.log(req.body);
    const entity = {
        parent: agentPath,
        entityType: req.body
      };


    entityTypesClient
    .createEntityType(entity)
    .then(responses => {
      console.log('Created entity type:', responses[0]);
      res.send(responses[0]);
    //   logEntityType(responses[0]);
    })
    .catch(err => {
      console.error('Failed to create entity type:', err);
      res.send(err)
    });
}
