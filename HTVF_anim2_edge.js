/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'HierarchicalVoxelFields19',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields19.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields18',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields18.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields17',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields17.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields16',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields16.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields15',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields15.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields14',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields14.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields13',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields13.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields12',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields12.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields11',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields11.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields10',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields10.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields9',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields9.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields8',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields8.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields7',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields7.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields6',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields6.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields5',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields5.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields4',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields4.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields3',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields3.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields2',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields2.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields1',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields1.svg",'0px','0px']
                        },
                        {
                            id: 'HierarchicalVoxelFields0',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0', '1024px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HierarchicalVoxelFields0.svg",'0px','0px']
                        },
                        {
                            id: 'backbutton',
                            type: 'image',
                            rect: ['193px', '410px', '60px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"backbutton.png",'0px','0px']
                        },
                        {
                            id: 'nextbutton',
                            type: 'image',
                            rect: ['270px', '410px', '60px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"nextbutton.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '625px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(11,11,11,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields0}",
                            'block',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HierarchicalVoxelFields15}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HTVF_anim2_edgeActions.js");
})("EDGE-3489513");
