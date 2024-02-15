// 1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

// Read in the URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Fetch the JSON data using D3
d3.json(url).then(function(data) {
    // Process the JSON data
    console.log(data);

    // Extract data arrays from the JSON
    const names = data.names;
    const metadata = data.metadata;
    const samples = data.samples;

    // Console log data arrays
    console.log(names);
    console.log(metadata);
    console.log(samples);


// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    let listOfNames = []

    for (let i=0; i < names.length; i++){
        if (listOfNames.indexOf(names[i]) === -1){
            listOfNames.push(names[i]);
        }
    }
  
    function getSampleData(chosenName){
        // id = samples.map(function (row){
        //     return row.id
        //   });
        // let id = data.samples[0].id
        // sample_values = samples.map(function (row){
        //     return row.sample_values
        //   });
        // otu_labels = samples.map(function (row){
        //     return row.otu_labels
        //   });

         
        //   console.log(sample_values)
        //   console.log(otu_labels)

        for (let i=0; i< names.length; i++){
            if (names[i] === chosenName){
                let id = data.samples[i].id;
                let sample_values = data.samples[i].sample_values;
                let otu_labels = data.samples[i].otu_labels;
                
                console.log(id)
                console.log(sample_values)
                console.log(otu_labels)
            }
        }
    }

    // Default sample data

    let selector = d3.select('#setDataset');

    for (let i=0; i< names.length; i++){
        selector.append('option').text(names[i]).property('value', names[i])
    }

    setBarPlot(selector);

    function setBarPlot(chosenName){
        getSampleData(chosenName);
    
        let trace1 = {
            x: sample_values,
            y: otu_labels,
            type: 'bar',
            orientation: 'h'
        };

        let data = [trace1];

        let layout = {
            title: 'OTUs',
            height: 400,
            width: 480
        };

        Plotly.newPlot('bar', data, layout);
    };

    // let innerContainer = document.querySelector('.col-md-5'),
    //     plotEl = innerContainer.querySelector('#bar'),
    //     nameSelector = innerContainer.querySelector('#selDataset');        

    // function assignOptions(textArray, selector) {
    //     for (var i = 0; i < textArray.length;  i++) {
    //         var currentOption = document.createElement('option');
    //         currentOption.text = textArray[i];
    //         selector.appendChild(currentOption);
    //     }
    // }

    // assignOptions(listOfNames, nameSelector);

    // function updateName(){
    //     setBarPlot(nameSelector.value);
    // }
    
    // nameSelector.addEventListener('onchange', updateName, false);


});


