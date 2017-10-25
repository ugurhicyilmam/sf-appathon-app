import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.css']
})
export class ResourceManagerComponent implements OnInit {
  supplyChartData: any;
  demandChartData: any;

  constructor() {
    this.demandChartData = [
 {
   "timeStamp": 1462086000,
   "y0": 0.029049,
   "y1": 0.03795,
   "y2": 0.034132,
   "y3": 0.078407,
   "y4": 0.041584,
   "y5": 0.08832
 },
 {
   "timeStamp": 1462087800,
   "y0": 0.026496,
   "y1": 0.035282,
   "y2": 0.032913,
   "y3": 0.075279,
   "y4": 0.041607,
   "y5": 0.087124
 },
 {
   "timeStamp": 1462089600,
   "y0": 0.024127,
   "y1": 0.034224,
   "y2": 0.031533,
   "y3": 0.073715,
   "y4": 0.041331,
   "y5": 0.082662
 },
 {
   "timeStamp": 1462091400,
   "y0": 0.022816,
   "y1": 0.033235,
   "y2": 0.030245,
   "y3": 0.069851,
   "y4": 0.040618,
   "y5": 0.08027
 },
 {
   "timeStamp": 1462093200,
   "y0": 0.021413,
   "y1": 0.031533,
   "y2": 0.030176,
   "y3": 0.066539,
   "y4": 0.04094,
   "y5": 0.080293
 },
 {
   "timeStamp": 1462095000,
   "y0": 0.020562,
   "y1": 0.030567,
   "y2": 0.031901,
   "y3": 0.063618,
   "y4": 0.041423,
   "y5": 0.080155
 },
 {
   "timeStamp": 1462096800,
   "y0": 0.020263,
   "y1": 0.030176,
   "y2": 0.034339,
   "y3": 0.064308,
   "y4": 0.041538,
   "y5": 0.079695
 },
 {
   "timeStamp": 1462098600,
   "y0": 0.020171,
   "y1": 0.030475,
   "y2": 0.033465,
   "y3": 0.063526,
   "y4": 0.041584,
   "y5": 0.078959
 },
 {
   "timeStamp": 1462100400,
   "y0": 0.020332,
   "y1": 0.0299,
   "y2": 0.033465,
   "y3": 0.064952,
   "y4": 0.042297,
   "y5": 0.079718
 },
 {
   "timeStamp": 1462102200,
   "y0": 0.020424,
   "y1": 0.029647,
   "y2": 0.034477,
   "y3": 0.063733,
   "y4": 0.043194,
   "y5": 0.082455
 },
 {
   "timeStamp": 1462104000,
   "y0": 0.020631,
   "y1": 0.028911,
   "y2": 0.033304,
   "y3": 0.061042,
   "y4": 0.043976,
   "y5": 0.082156
 },
 {
   "timeStamp": 1462105800,
   "y0": 0.022172,
   "y1": 0.02921,
   "y2": 0.034776,
   "y3": 0.060329,
   "y4": 0.043608,
   "y5": 0.080776
 },
 {
   "timeStamp": 1462107600,
   "y0": 0.025691,
   "y1": 0.031073,
   "y2": 0.038456,
   "y3": 0.064308,
   "y4": 0.045862,
   "y5": 0.087055
 },
 {
   "timeStamp": 1462109400,
   "y0": 0.029693,
   "y1": 0.035604,
   "y2": 0.043654,
   "y3": 0.071162,
   "y4": 0.047541,
   "y5": 0.097888
 },
 {
   "timeStamp": 1462111200,
   "y0": 0.035788,
   "y1": 0.044689,
   "y2": 0.048898,
   "y3": 0.081121,
   "y4": 0.061571,
   "y5": 0.115046
 },
 {
   "timeStamp": 1462113000,
   "y0": 0.037674,
   "y1": 0.05129,
   "y2": 0.055476,
   "y3": 0.094783,
   "y4": 0.067206,
   "y5": 0.125994
 },
 {
   "timeStamp": 1462114800,
   "y0": 0.037536,
   "y1": 0.056143,
   "y2": 0.059938,
   "y3": 0.101614,
   "y4": 0.060582,
   "y5": 0.066838
 },
 {
   "timeStamp": 1462116600,
   "y0": 0.036892,
   "y1": 0.060881,
   "y2": 0.064423,
   "y3": 0.10718,
   "y4": 0.090482,
   "y5": 0.142278
 },
 {
   "timeStamp": 1462118400,
   "y0": 0.037973,
   "y1": 0.068977,
   "y2": 0.068195,
   "y3": 0.115345,
   "y4": 0.093311,
   "y5": 0.148074
 },
 {
   "timeStamp": 1462120200,
   "y0": 0.038502,
   "y1": 0.071024,
   "y2": 0.069345,
   "y3": 0.122107,
   "y4": 0.093357,
   "y5": 0.150742
 },
 {
   "timeStamp": 1462122000,
   "y0": 0.038272,
   "y1": 0.07314,
   "y2": 0.069253,
   "y3": 0.12144,
   "y4": 0.091103,
   "y5": 0.15134
 },
 {
   "timeStamp": 1462123800,
   "y0": 0.038732,
   "y1": 0.074129,
   "y2": 0.071346,
   "y3": 0.123809,
   "y4": 0.094392,
   "y5": 0.154215
 },
 {
   "timeStamp": 1462125600,
   "y0": 0.038594,
   "y1": 0.075095,
   "y2": 0.070242,
   "y3": 0.126132,
   "y4": 0.096416,
   "y5": 0.152122
 },
 {
   "timeStamp": 1462127400,
   "y0": 0.038364,
   "y1": 0.076705,
   "y2": 0.071254,
   "y3": 0.124959,
   "y4": 0.100004,
   "y5": 0.151064
 },
 {
   "timeStamp": 1462129200,
   "y0": 0.038893,
   "y1": 0.075808,
   "y2": 0.070265,
   "y3": 0.125488,
   "y4": 0.100257,
   "y5": 0.152375
 },
 {
   "timeStamp": 1462131000,
   "y0": 0.03887,
   "y1": 0.077326,
   "y2": 0.069299,
   "y3": 0.12466,
   "y4": 0.099659,
   "y5": 0.152812
 },
 {
   "timeStamp": 1462132800,
   "y0": 0.039353,
   "y1": 0.076705,
   "y2": 0.064906,
   "y3": 0.122797,
   "y4": 0.095013,
   "y5": 0.150259
 },
 {
   "timeStamp": 1462134600,
   "y0": 0.03864,
   "y1": 0.075762,
   "y2": 0.064538,
   "y3": 0.122521,
   "y4": 0.097773,
   "y5": 0.150558
 },
 {
   "timeStamp": 1462136400,
   "y0": 0.039054,
   "y1": 0.073577,
   "y2": 0.066792,
   "y3": 0.120267,
   "y4": 0.097727,
   "y5": 0.149661
 },
 {
   "timeStamp": 1462138200,
   "y0": 0.03933,
   "y1": 0.073186,
   "y2": 0.066148,
   "y3": 0.119853,
   "y4": 0.100027,
   "y5": 0.15088
 },
 {
   "timeStamp": 1462140000,
   "y0": 0.039376,
   "y1": 0.072864,
   "y2": 0.06647,
   "y3": 0.118933,
   "y4": 0.095565,
   "y5": 0.150673
 },
 {
   "timeStamp": 1462141800,
   "y0": 0.039997,
   "y1": 0.07475,
   "y2": 0.065274,
   "y3": 0.119002,
   "y4": 0.094231,
   "y5": 0.153042
 },
 {
   "timeStamp": 1462143600,
   "y0": 0.041101,
   "y1": 0.076383,
   "y2": 0.065251,
   "y3": 0.121003,
   "y4": 0.09108,
   "y5": 0.149776
 },
 {
   "timeStamp": 1462145400,
   "y0": 0.044298,
   "y1": 0.076475,
   "y2": 0.063526,
   "y3": 0.122636,
   "y4": 0.086296,
   "y5": 0.14766
 },
 {
   "timeStamp": 1462147200,
   "y0": 0.046046,
   "y1": 0.07475,
   "y2": 0.062054,
   "y3": 0.120911,
   "y4": 0.082133,
   "y5": 0.143842
 },
 {
   "timeStamp": 1462149000,
   "y0": 0.047909,
   "y1": 0.072772,
   "y2": 0.056419,
   "y3": 0.11684,
   "y4": 0.079373,
   "y5": 0.142232
 },
 {
   "timeStamp": 1462150800,
   "y0": 0.047932,
   "y1": 0.068333,
   "y2": 0.052969,
   "y3": 0.109687,
   "y4": 0.079143,
   "y5": 0.136827
 },
 {
   "timeStamp": 1462152600,
   "y0": 0.046897,
   "y1": 0.061065,
   "y2": 0.049795,
   "y3": 0.108399,
   "y4": 0.075302,
   "y5": 0.130663
 },
 {
   "timeStamp": 1462154400,
   "y0": 0.044988,
   "y1": 0.056948,
   "y2": 0.046828,
   "y3": 0.105455,
   "y4": 0.074888,
   "y5": 0.126132
 },
 {
   "timeStamp": 1462156200,
   "y0": 0.045126,
   "y1": 0.054671,
   "y2": 0.044574,
   "y3": 0.098118,
   "y4": 0.072473,
   "y5": 0.121762
 },
 {
   "timeStamp": 1462158000,
   "y0": 0.045126,
   "y1": 0.054671,
   "y2": 0.044574,
   "y3": 0.098118,
   "y4": 0.072473,
   "y5": 0.121762
 },
 {
   "timeStamp": 1462159800,
   "y0": 0.042228,
   "y1": 0.051129,
   "y2": 0.041377,
   "y3": 0.098371,
   "y4": 0.072496,
   "y5": 0.120566
 },
 {
   "timeStamp": 1462161600,
   "y0": 0.041929,
   "y1": 0.050577,
   "y2": 0.04071,
   "y3": 0.09798,
   "y4": 0.069207,
   "y5": 0.117737
 },
 {
   "timeStamp": 1462163400,
   "y0": 0.044643,
   "y1": 0.051612,
   "y2": 0.041308,
   "y3": 0.10281,
   "y4": 0.067942,
   "y5": 0.118565
 },
 {
   "timeStamp": 1462165200,
   "y0": 0.043148,
   "y1": 0.051405,
   "y2": 0.041837,
   "y3": 0.098486,
   "y4": 0.068402,
   "y5": 0.121187
 },
 {
   "timeStamp": 1462167000,
   "y0": 0.038755,
   "y1": 0.047794,
   "y2": 0.039169,
   "y3": 0.091172,
   "y4": 0.067206,
   "y5": 0.11684
 },
 {
   "timeStamp": 1462168800,
   "y0": 0.034362,
   "y1": 0.044275,
   "y2": 0.036041,
   "y3": 0.086549,
   "y4": 0.06601,
   "y5": 0.111757
 },
 {
   "timeStamp": 1462170600,
   "y0": 0.030774,
   "y1": 0.041078,
   "y2": 0.034155,
   "y3": 0.082248,
   "y4": 0.062399,
   "y5": 0.108077
 },
 {
   "timeStamp": 1462172400,
   "y0": 0.027945,
   "y1": 0.038663,
   "y2": 0.033925,
   "y3": 0.077234,
   "y4": 0.060766,
   "y5": 0.101637
 },
 {
   "timeStamp": 1462174200,
   "y0": 0.025806,
   "y1": 0.037559,
   "y2": 0.033971,
   "y3": 0.072013,
   "y4": 0.059823,
   "y5": 0.09867
 },
 {
   "timeStamp": 1462176000,
   "y0": 0.024081,
   "y1": 0.036823,
   "y2": 0.032062,
   "y3": 0.070541,
   "y4": 0.059639,
   "y5": 0.097244
 },
 {
   "timeStamp": 1462177800,
   "y0": 0.022517,
   "y1": 0.034845,
   "y2": 0.031165,
   "y3": 0.069621,
   "y4": 0.058213,
   "y5": 0.094461
 },
 {
   "timeStamp": 1462179600,
   "y0": 0.021137,
   "y1": 0.033212,
   "y2": 0.03082,
   "y3": 0.064952,
   "y4": 0.059317,
   "y5": 0.093932
 },
 {
   "timeStamp": 1462181400,
   "y0": 0.020953,
   "y1": 0.032591,
   "y2": 0.030843,
   "y3": 0.060743,
   "y4": 0.056971,
   "y5": 0.094714
 },
 {
   "timeStamp": 1462183200,
   "y0": 0.020677,
   "y1": 0.031809,
   "y2": 0.030843,
   "y3": 0.062123,
   "y4": 0.057132,
   "y5": 0.093679
 },
 {
   "timeStamp": 1462185000,
   "y0": 0.020516,
   "y1": 0.031763,
   "y2": 0.030199,
   "y3": 0.060766,
   "y4": 0.057776,
   "y5": 0.09108
 },
 {
   "timeStamp": 1462186800,
   "y0": 0.0207,
   "y1": 0.031234,
   "y2": 0.031395,
   "y3": 0.060375,
   "y4": 0.057477,
   "y5": 0.092667
 },
 {
   "timeStamp": 1462188600,
   "y0": 0.020562,
   "y1": 0.031349,
   "y2": 0.036409,
   "y3": 0.060766,
   "y4": 0.056511,
   "y5": 0.09154
 },
 {
   "timeStamp": 1462190400,
   "y0": 0.020723,
   "y1": 0.031073,
   "y2": 0.035558,
   "y3": 0.059156,
   "y4": 0.057661,
   "y5": 0.093242
 },
 {
   "timeStamp": 1462192200,
   "y0": 0.022149,
   "y1": 0.031349,
   "y2": 0.036087,
   "y3": 0.05819,
   "y4": 0.058857,
   "y5": 0.093656
 },
 {
   "timeStamp": 1462194000,
   "y0": 0.024403,
   "y1": 0.034707,
   "y2": 0.039215,
   "y3": 0.062284,
   "y4": 0.059524,
   "y5": 0.102764
 },
 {
   "timeStamp": 1462195800,
   "y0": 0.03036,
   "y1": 0.037398,
   "y2": 0.045149,
   "y3": 0.069575,
   "y4": 0.062399,
   "y5": 0.105823
 },
 {
   "timeStamp": 1462197600,
   "y0": 0.035351,
   "y1": 0.045494,
   "y2": 0.050968,
   "y3": 0.083582,
   "y4": 0.070702,
   "y5": 0.120106
 },
 {
   "timeStamp": 1462199400,
   "y0": 0.037881,
   "y1": 0.052808,
   "y2": 0.053337,
   "y3": 0.094944,
   "y4": 0.078775,
   "y5": 0.129651
 },
 {
   "timeStamp": 1462201200,
   "y0": 0.038985,
   "y1": 0.060743,
   "y2": 0.058213,
   "y3": 0.104052,
   "y4": 0.089309,
   "y5": 0.145314
 },
 {
   "timeStamp": 1462203000,
   "y0": 0.036984,
   "y1": 0.065573,
   "y2": 0.06256,
   "y3": 0.110745,
   "y4": 0.097428,
   "y5": 0.151869
 },
 {
   "timeStamp": 1462204800,
   "y0": 0.038157,
   "y1": 0.0713,
   "y2": 0.066792,
   "y3": 0.118726,
   "y4": 0.100257,
   "y5": 0.15502
 },
 {
   "timeStamp": 1462206600,
   "y0": 0.037421,
   "y1": 0.072772,
   "y2": 0.070541,
   "y3": 0.123303,
   "y4": 0.10166,
   "y5": 0.154859
 },
 {
   "timeStamp": 1462208400,
   "y0": 0.037743,
   "y1": 0.075762,
   "y2": 0.069437,
   "y3": 0.124913,
   "y4": 0.097727,
   "y5": 0.15502
 },
 {
   "timeStamp": 1462210200,
   "y0": 0.038847,
   "y1": 0.077625,
   "y2": 0.072059,
   "y3": 0.127052,
   "y4": 0.101315,
   "y5": 0.15801
 },
 {
   "timeStamp": 1462212000,
   "y0": 0.038755,
   "y1": 0.078959,
   "y2": 0.071116,
   "y3": 0.126293,
   "y4": 0.104121,
   "y5": 0.162334
 },
 {
   "timeStamp": 1462213800,
   "y0": 0.038732,
   "y1": 0.078637,
   "y2": 0.071185,
   "y3": 0.127627,
   "y4": 0.102902,
   "y5": 0.160793
 },
 {
   "timeStamp": 1462215600,
   "y0": 0.038157,
   "y1": 0.078729,
   "y2": 0.072473,
   "y3": 0.12903,
   "y4": 0.104673,
   "y5": 0.157803
 },
 {
   "timeStamp": 1462217400,
   "y0": 0.039008,
   "y1": 0.08165,
   "y2": 0.072197,
   "y3": 0.130065,
   "y4": 0.104834,
   "y5": 0.155618
 },
 {
   "timeStamp": 1462219200,
   "y0": 0.040365,
   "y1": 0.081328,
   "y2": 0.067275,
   "y3": 0.126385,
   "y4": 0.100303,
   "y5": 0.15364
 },
 {
   "timeStamp": 1462221000,
   "y0": 0.03979,
   "y1": 0.078959,
   "y2": 0.066999,
   "y3": 0.129904,
   "y4": 0.102649,
   "y5": 0.154031
 },
 {
   "timeStamp": 1462222800,
   "y0": 0.039169,
   "y1": 0.080339,
   "y2": 0.068287,
   "y3": 0.129559,
   "y4": 0.107088,
   "y5": 0.14835
 },
 {
   "timeStamp": 1462224600,
   "y0": 0.039215,
   "y1": 0.079235,
   "y2": 0.067758,
   "y3": 0.129697,
   "y4": 0.104995,
   "y5": 0.154261
 },
 {
   "timeStamp": 1462226400,
   "y0": 0.04025,
   "y1": 0.078683,
   "y2": 0.066332,
   "y3": 0.130571,
   "y4": 0.105892,
   "y5": 0.155848
 },
 {
   "timeStamp": 1462228200,
   "y0": 0.041699,
   "y1": 0.079235,
   "y2": 0.067045,
   "y3": 0.130847,
   "y4": 0.100717,
   "y5": 0.152628
 },
 {
   "timeStamp": 1462230000,
   "y0": 0.042964,
   "y1": 0.081604,
   "y2": 0.068494,
   "y3": 0.129674,
   "y4": 0.096186,
   "y5": 0.15341
 },
 {
   "timeStamp": 1462231800,
   "y0": 0.045057,
   "y1": 0.082754,
   "y2": 0.067482,
   "y3": 0.128064,
   "y4": 0.090482,
   "y5": 0.149661
 },
 {
   "timeStamp": 1462233600,
   "y0": 0.058857,
   "y1": 0.080063,
   "y2": 0.066148,
   "y3": 0.125511,
   "y4": 0.08694,
   "y5": 0.146533
 },
 {
   "timeStamp": 1462235400,
   "y0": 0.065757,
   "y1": 0.077464,
   "y2": 0.059915,
   "y3": 0.123809,
   "y4": 0.083812,
   "y5": 0.144233
 },
 {
   "timeStamp": 1462237200,
   "y0": 0.062882,
   "y1": 0.071461,
   "y2": 0.056511,
   "y3": 0.119439,
   "y4": 0.082754,
   "y5": 0.142968
 },
 {
   "timeStamp": 1462239000,
   "y0": 0.059248,
   "y1": 0.067597,
   "y2": 0.052532,
   "y3": 0.113896,
   "y4": 0.079557,
   "y5": 0.135332
 },
 {
   "timeStamp": 1462240800,
   "y0": 0.056051,
   "y1": 0.062491,
   "y2": 0.049197,
   "y3": 0.110101,
   "y4": 0.077441,
   "y5": 0.130824
 },
 {
   "timeStamp": 1462242600,
   "y0": 0.053912,
   "y1": 0.058328,
   "y2": 0.047541,
   "y3": 0.106467,
   "y4": 0.078131,
   "y5": 0.127696
 },
 {
   "timeStamp": 1462244400,
   "y0": 0.053912,
   "y1": 0.058328,
   "y2": 0.047541,
   "y3": 0.106467,
   "y4": 0.078131,
   "y5": 0.127696
 },
 {
   "timeStamp": 1462246200,
   "y0": 0.052808,
   "y1": 0.05635,
   "y2": 0.045264,
   "y3": 0.103431,
   "y4": 0.076843,
   "y5": 0.120727
 },
 {
   "timeStamp": 1462248000,
   "y0": 0.054188,
   "y1": 0.055591,
   "y2": 0.044781,
   "y3": 0.100579,
   "y4": 0.073761,
   "y5": 0.122659
 },
 {
   "timeStamp": 1462249800,
   "y0": 0.054257,
   "y1": 0.055913,
   "y2": 0.044482,
   "y3": 0.102281,
   "y4": 0.074566,
   "y5": 0.124752
 }
];

    this.supplyChartData =  [
 {
   "timeStamp": 1462086000,
   "y0": 0.08045492,
   "y1": 0,
   "y2": 0.22898708,
   "y3": 0.309442
 },
 {
   "timeStamp": 1462087800,
   "y0": 0.07766226,
   "y1": 0,
   "y2": 0.22103874,
   "y3": 0.298701
 },
 {
   "timeStamp": 1462089600,
   "y0": 0.07477392,
   "y1": 0,
   "y2": 0.21281808,
   "y3": 0.287592
 },
 {
   "timeStamp": 1462091400,
   "y0": 0.0720291,
   "y1": 0,
   "y2": 0.2050059,
   "y3": 0.277035
 },
 {
   "timeStamp": 1462093200,
   "y0": 0.07043244,
   "y1": 0,
   "y2": 0.20046156,
   "y3": 0.270894
 },
 {
   "timeStamp": 1462095000,
   "y0": 0.06973876,
   "y1": 0,
   "y2": 0.19848724,
   "y3": 0.268226
 },
 {
   "timeStamp": 1462096800,
   "y0": 0.07028294,
   "y1": 0,
   "y2": 0.20003606,
   "y3": 0.270319
 },
 {
   "timeStamp": 1462098600,
   "y0": 0.0697268,
   "y1": 0,
   "y2": 0.1984532,
   "y3": 0.26818
 },
 {
   "timeStamp": 1462100400,
   "y0": 0.07037264,
   "y1": 0,
   "y2": 0.20029136,
   "y3": 0.270664
 },
 {
   "timeStamp": 1462102200,
   "y0": 0.0712218,
   "y1": 0,
   "y2": 0.2027082,
   "y3": 0.27393
 },
 {
   "timeStamp": 1462104000,
   "y0": 0.0702052,
   "y1": 0.09,
   "y2": 0.1098148,
   "y3": 0.27002
 },
 {
   "timeStamp": 1462105800,
   "y0": 0.07042646,
   "y1": 0.21,
   "y2": -0.00955546,
   "y3": 0.270871
 },
 {
   "timeStamp": 1462107600,
   "y0": 0.0760357,
   "y1": 0.09,
   "y2": 0.1264093,
   "y3": 0.292445
 },
 {
   "timeStamp": 1462109400,
   "y0": 0.08464092,
   "y1": 0.15,
   "y2": 0.09090108,
   "y3": 0.325542
 },
 {
   "timeStamp": 1462111200,
   "y0": 0.10064938,
   "y1": 0.12,
   "y2": 0.16646362,
   "y3": 0.387113
 },
 {
   "timeStamp": 1462113000,
   "y0": 0.11242998,
   "y1": 0.09,
   "y2": 0.22999302,
   "y3": 0.432423
 },
 {
   "timeStamp": 1462114800,
   "y0": 0.09948926,
   "y1": 0,
   "y2": 0.28316174,
   "y3": 0.382651
 },
 {
   "timeStamp": 1462116600,
   "y0": 0.13055536,
   "y1": 0,
   "y2": 0.37158064,
   "y3": 0.502136
 },
 {
   "timeStamp": 1462118400,
   "y0": 0.1382875,
   "y1": 0,
   "y2": 0.3935875,
   "y3": 0.531875
 },
 {
   "timeStamp": 1462120200,
   "y0": 0.14172002,
   "y1": 0,
   "y2": 0.40335698,
   "y3": 0.545077
 },
 {
   "timeStamp": 1462122000,
   "y0": 0.14158248,
   "y1": 0,
   "y2": 0.40296552,
   "y3": 0.544548
 },
 {
   "timeStamp": 1462123800,
   "y0": 0.14472198,
   "y1": 0,
   "y2": 0.41190102,
   "y3": 0.556623
 },
 {
   "timeStamp": 1462125600,
   "y0": 0.14523626,
   "y1": 0,
   "y2": 0.41336474,
   "y3": 0.558601
 },
 {
   "timeStamp": 1462127400,
   "y0": 0.146211,
   "y1": 0,
   "y2": 0.416139,
   "y3": 0.56235
 },
 {
   "timeStamp": 1462129200,
   "y0": 0.14640236,
   "y1": 0,
   "y2": 0.41668364,
   "y3": 0.563086
 },
 {
   "timeStamp": 1462131000,
   "y0": 0.14628276,
   "y1": 0,
   "y2": 0.41634324,
   "y3": 0.562626
 },
 {
   "timeStamp": 1462132800,
   "y0": 0.14274858,
   "y1": 0,
   "y2": 0.40628442,
   "y3": 0.549033
 },
 {
   "timeStamp": 1462134600,
   "y0": 0.14294592,
   "y1": 0,
   "y2": 0.40684608,
   "y3": 0.549792
 },
 {
   "timeStamp": 1462136400,
   "y0": 0.14224028,
   "y1": 0,
   "y2": 0.40483772,
   "y3": 0.547078
 },
 {
   "timeStamp": 1462138200,
   "y0": 0.14285024,
   "y1": 0,
   "y2": 0.40657376,
   "y3": 0.549424
 },
 {
   "timeStamp": 1462140000,
   "y0": 0.14140906,
   "y1": 0,
   "y2": 0.40247194,
   "y3": 0.543881
 },
 {
   "timeStamp": 1462141800,
   "y0": 0.14203696,
   "y1": 0,
   "y2": 0.40425904,
   "y3": 0.546296
 },
 {
   "timeStamp": 1462143600,
   "y0": 0.14159444,
   "y1": 0,
   "y2": 0.40299956,
   "y3": 0.544594
 },
 {
   "timeStamp": 1462145400,
   "y0": 0.14063166,
   "y1": 0.03,
   "y2": 0.37025934,
   "y3": 0.540891
 },
 {
   "timeStamp": 1462147200,
   "y0": 0.13773136,
   "y1": 0.24,
   "y2": 0.15200464,
   "y3": 0.529736
 },
 {
   "timeStamp": 1462149000,
   "y0": 0.1340417,
   "y1": 0.3,
   "y2": 0.0815033,
   "y3": 0.515545
 },
 {
   "timeStamp": 1462150800,
   "y0": 0.12867166,
   "y1": 0.3,
   "y2": 0.06621934,
   "y3": 0.494891
 },
 {
   "timeStamp": 1462152600,
   "y0": 0.12275146,
   "y1": 0.18,
   "y2": 0.16936954,
   "y3": 0.472121
 },
 {
   "timeStamp": 1462154400,
   "y0": 0.11836214,
   "y1": 0,
   "y2": 0.33687686,
   "y3": 0.455239
 },
 {
   "timeStamp": 1462156200,
   "y0": 0.11354824,
   "y1": 0.21,
   "y2": 0.11317576,
   "y3": 0.436724
 },
 {
   "timeStamp": 1462158000,
   "y0": 0.11354824,
   "y1": 0,
   "y2": 0.32317576,
   "y3": 0.436724
 },
 {
   "timeStamp": 1462159800,
   "y0": 0.11080342,
   "y1": 0,
   "y2": 0.31536358,
   "y3": 0.426167
 },
 {
   "timeStamp": 1462161600,
   "y0": 0.1087164,
   "y1": 0,
   "y2": 0.3094236,
   "y3": 0.41814
 },
 {
   "timeStamp": 1462163400,
   "y0": 0.1109888,
   "y1": 0,
   "y2": 0.3158912,
   "y3": 0.42688
 },
 {
   "timeStamp": 1462165200,
   "y0": 0.1103609,
   "y1": 0,
   "y2": 0.3141041,
   "y3": 0.424465
 },
 {
   "timeStamp": 1462167000,
   "y0": 0.10424336,
   "y1": 0,
   "y2": 0.29669264,
   "y3": 0.400936
 },
 {
   "timeStamp": 1462168800,
   "y0": 0.09853844,
   "y1": 0,
   "y2": 0.28045556,
   "y3": 0.378994
 },
 {
   "timeStamp": 1462170600,
   "y0": 0.09327006,
   "y1": 0,
   "y2": 0.26546094,
   "y3": 0.358731
 },
 {
   "timeStamp": 1462172400,
   "y0": 0.0884442,
   "y1": 0,
   "y2": 0.2517258,
   "y3": 0.34017
 },
 {
   "timeStamp": 1462174200,
   "y0": 0.08523892,
   "y1": 0,
   "y2": 0.24260308,
   "y3": 0.327842
 },
 {
   "timeStamp": 1462176000,
   "y0": 0.0833014,
   "y1": 0,
   "y2": 0.2370886,
   "y3": 0.32039
 },
 {
   "timeStamp": 1462177800,
   "y0": 0.08081372,
   "y1": 0,
   "y2": 0.23000828,
   "y3": 0.310822
 },
 {
   "timeStamp": 1462179600,
   "y0": 0.0788762,
   "y1": 0,
   "y2": 0.2244938,
   "y3": 0.30337
 },
 {
   "timeStamp": 1462181400,
   "y0": 0.0771719,
   "y1": 0,
   "y2": 0.2196431,
   "y3": 0.296815
 },
 {
   "timeStamp": 1462183200,
   "y0": 0.07702838,
   "y1": 0,
   "y2": 0.21923462,
   "y3": 0.296263
 },
 {
   "timeStamp": 1462185000,
   "y0": 0.075946,
   "y1": 0,
   "y2": 0.216154,
   "y3": 0.2921
 },
 {
   "timeStamp": 1462186800,
   "y0": 0.07640048,
   "y1": 0,
   "y2": 0.21744752,
   "y3": 0.293848
 },
 {
   "timeStamp": 1462188600,
   "y0": 0.07725562,
   "y1": 0,
   "y2": 0.21988138,
   "y3": 0.297137
 },
 {
   "timeStamp": 1462190400,
   "y0": 0.07732738,
   "y1": 0,
   "y2": 0.22008562,
   "y3": 0.297413
 },
 {
   "timeStamp": 1462192200,
   "y0": 0.07807488,
   "y1": 0,
   "y2": 0.22221312,
   "y3": 0.300288
 },
 {
   "timeStamp": 1462194000,
   "y0": 0.08395322,
   "y1": 0.03,
   "y2": 0.20894378,
   "y3": 0.322897
 },
 {
   "timeStamp": 1462195800,
   "y0": 0.09118304,
   "y1": 0,
   "y2": 0.25952096,
   "y3": 0.350704
 },
 {
   "timeStamp": 1462197600,
   "y0": 0.10561278,
   "y1": 0,
   "y2": 0.30059022,
   "y3": 0.406203
 },
 {
   "timeStamp": 1462199400,
   "y0": 0.11632296,
   "y1": 0,
   "y2": 0.33107304,
   "y3": 0.447396
 },
 {
   "timeStamp": 1462201200,
   "y0": 0.12912016,
   "y1": 0,
   "y2": 0.36749584,
   "y3": 0.496616
 },
 {
   "timeStamp": 1462203000,
   "y0": 0.13654134,
   "y1": 0,
   "y2": 0.38861766,
   "y3": 0.525159
 },
 {
   "timeStamp": 1462204800,
   "y0": 0.14306552,
   "y1": 0,
   "y2": 0.40718648,
   "y3": 0.550252
 },
 {
   "timeStamp": 1462206600,
   "y0": 0.14574456,
   "y1": 0,
   "y2": 0.41481144,
   "y3": 0.560556
 },
 {
   "timeStamp": 1462208400,
   "y0": 0.14575652,
   "y1": 0,
   "y2": 0.41484548,
   "y3": 0.560602
 },
 {
   "timeStamp": 1462210200,
   "y0": 0.14947608,
   "y1": 0,
   "y2": 0.42543192,
   "y3": 0.574908
 },
 {
   "timeStamp": 1462212000,
   "y0": 0.15121028,
   "y1": 0,
   "y2": 0.43036772,
   "y3": 0.581578
 },
 {
   "timeStamp": 1462213800,
   "y0": 0.15076776,
   "y1": 0,
   "y2": 0.42910824,
   "y3": 0.579876
 },
 {
   "timeStamp": 1462215600,
   "y0": 0.1510249,
   "y1": 0,
   "y2": 0.4298401,
   "y3": 0.580865
 },
 {
   "timeStamp": 1462217400,
   "y0": 0.15167672,
   "y1": 0,
   "y2": 0.43169528,
   "y3": 0.583372
 },
 {
   "timeStamp": 1462219200,
   "y0": 0.14801696,
   "y1": 0,
   "y2": 0.42127904,
   "y3": 0.569296
 },
 {
   "timeStamp": 1462221000,
   "y0": 0.14880632,
   "y1": 0,
   "y2": 0.42352568,
   "y3": 0.572332
 },
 {
   "timeStamp": 1462222800,
   "y0": 0.14892592,
   "y1": 0,
   "y2": 0.42386608,
   "y3": 0.572792
 },
 {
   "timeStamp": 1462224600,
   "y0": 0.14954186,
   "y1": 0,
   "y2": 0.42561914,
   "y3": 0.575161
 },
 {
   "timeStamp": 1462226400,
   "y0": 0.15016976,
   "y1": 0,
   "y2": 0.42740624,
   "y3": 0.577576
 },
 {
   "timeStamp": 1462228200,
   "y0": 0.14876446,
   "y1": 0,
   "y2": 0.42340654,
   "y3": 0.572171
 },
 {
   "timeStamp": 1462230000,
   "y0": 0.14880632,
   "y1": 0,
   "y2": 0.42352568,
   "y3": 0.572332
 },
 {
   "timeStamp": 1462231800,
   "y0": 0.14651,
   "y1": 0,
   "y2": 0.41699,
   "y3": 0.5635
 },
 {
   "timeStamp": 1462233600,
   "y0": 0.14665352,
   "y1": 0,
   "y2": 0.41739848,
   "y3": 0.564052
 },
 {
   "timeStamp": 1462235400,
   "y0": 0.1442974,
   "y1": 0,
   "y2": 0.4106926,
   "y3": 0.55499
 },
 {
   "timeStamp": 1462237200,
   "y0": 0.1393639,
   "y1": 0,
   "y2": 0.3966511,
   "y3": 0.536015
 },
 {
   "timeStamp": 1462239000,
   "y0": 0.13212212,
   "y1": 0,
   "y2": 0.37603988,
   "y3": 0.508162
 },
 {
   "timeStamp": 1462240800,
   "y0": 0.1263873,
   "y1": 0,
   "y2": 0.3597177,
   "y3": 0.486105
 },
 {
   "timeStamp": 1462242600,
   "y0": 0.1227395,
   "y1": 0,
   "y2": 0.3493355,
   "y3": 0.472075
 },
 {
   "timeStamp": 1462244400,
   "y0": 0.1227395,
   "y1": 0,
   "y2": 0.3493355,
   "y3": 0.472075
 },
 {
   "timeStamp": 1462246200,
   "y0": 0.11840998,
   "y1": 0,
   "y2": 0.33701302,
   "y3": 0.455423
 },
 {
   "timeStamp": 1462248000,
   "y0": 0.11740534,
   "y1": 0,
   "y2": 0.33415366,
   "y3": 0.451559
 },
 {
   "timeStamp": 1462249800,
   "y0": 0.11862526,
   "y1": 0,
   "y2": 0.33762574,
   "y3": 0.456251
 }
];

  }

  ngOnInit() {
  }

}
