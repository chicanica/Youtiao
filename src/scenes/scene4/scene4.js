(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scene4_atlas_1", frames: [[728,0,206,878],[0,0,726,1174],[728,880,55,80]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["scene4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["scene4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPattern16 = function() {
	this.initialize(ss["scene4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-51.5,-219.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-219.5,103,439);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-181.45,-293.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Фонарь_цвет
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FD8D37","rgba(253,141,55,0)"],[0,1],0,0,0,0,0,369.2).s().p("EgWcA1KQqXkZn/n+Qn/n/kYqXQkiquAArvQAAruEiquQEYqXH/n+QH/n/KXkZQKukiLuAAQLvAAKuEiQKXEZH/H/QH/H+EYKXQEiKuAALuQAALvkiKuQkYKXn/H/Qn/H+qXEZQquEirvAAQruAAqukig");
	this.shape.setTransform(2.525,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.7,-312.7,738.5,738.4);


// stage content:
(lib.scene4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Вверх
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(960,-0.05,1,1,-3.6272,0,0,0,-293.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:-4.5422,x:960.2},1).to({rotation:-5.3268,x:960.15,y:0},1).to({regX:0,rotation:-5.9909,x:960.05,y:-0.1},1).to({regX:0.1,rotation:-6.5442,x:960.15,y:-0.05},1).to({rotation:-6.9976,y:0},1).to({rotation:-7.3607,y:-0.05},1).to({rotation:-7.6428,x:960.1},1).to({rotation:-7.8555,x:960.15},1).to({rotation:-8.0082,y:-0.1},1).to({regX:0,rotation:-8.1097,x:960.1,y:-0.05},1).to({rotation:-8.1715,y:0},1).to({rotation:-8.2033,x:960.05,y:-0.05},1).to({regX:0.1,rotation:-8.2148,x:960.15},1).to({rotation:-8.2174,x:960.1},1).to({rotation:-8.2149},1).to({regY:-293.8,rotation:-8.2054,y:0.05},1).to({regY:-293.9,rotation:-8.1787,y:0},1).to({rotation:-8.1268,y:-0.05},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-8.0411,y:0},1).to({scaleX:1,scaleY:1,rotation:-7.9131},1).to({regY:-293.8,rotation:-7.7338,x:960.05,y:0.1},1).to({rotation:-7.4958},1).to({regY:-293.9,rotation:-7.1898,x:960.1,y:0},1).to({regY:-293.8,rotation:-6.8084,y:0.1},1).to({regY:-293.9,rotation:-6.342,y:-0.05},1).to({rotation:-5.7818,y:0},1).to({rotation:-5.1214},1).to({rotation:-4.3494,x:960.05},1).to({rotation:-3.4617},1).to({regY:-293.8,rotation:-2.4452,y:0.1},1).to({regY:-293.9,rotation:-1.2949,x:960,y:0},1).to({regX:0,rotation:0},1).to({rotation:1.259},1).to({rotation:2.3796},1).to({regX:0.1,rotation:3.3679,x:960.1},1).to({rotation:4.2327},1).to({rotation:4.9826},1).to({regX:0,rotation:5.6253,x:960,y:-0.05},1).to({regX:0.1,rotation:6.1694,x:960.1,y:0},1).to({rotation:6.6234},1).to({regX:0,rotation:6.9949,x:960},1).to({rotation:7.2919,y:0.05},1).to({rotation:7.5238},1).to({regX:0.1,rotation:7.6975,x:960.1,y:0},1).to({regX:0,rotation:7.8227,x:960},1).to({rotation:7.9067,x:959.95},1).to({rotation:7.957,x:960.05,y:0.05},1).to({regX:0.1,rotation:7.9835,x:960.1,y:0},1).to({regX:0,rotation:7.9922,x:960},1).to({rotation:7.9948,x:959.95},1).to({regX:0.1,rotation:7.9924,x:960.05,y:-0.05},1).to({rotation:7.9827},1).to({regX:0,rotation:7.9571,x:960},1).to({regX:0.1,rotation:7.9069,x:960.05},1).to({rotation:7.8229,x:960.1},1).to({rotation:7.6983,x:960.05,y:-0.1},1).to({rotation:7.524,x:960.1,y:-0.05},1).to({rotation:7.2919,y:0},1).to({rotation:6.995,y:-0.05},1).to({rotation:6.6235},1).to({rotation:6.1695},1).to({rotation:5.6254,x:960.05,y:0},1).to({regX:0,rotation:4.9827,y:-0.05},1).to({rotation:4.2327,x:960},1).to({regX:0.1,rotation:3.3679,x:960.1},1).to({rotation:2.3796},1).to({rotation:1.2591,x:960.05},1).to({regX:0,rotation:0,x:960,y:0},1).to({regX:0.1,rotation:-1.294,x:960.05,y:-0.05},1).to({regX:0,rotation:-2.4452,x:960},1).to({regX:0.1,rotation:-3.4616,x:960.1},1).wait(1));

	// Низ
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(1007.1,485.4,1,1,0,0,0,0,-219.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.4117,x:1011.6,y:485.45},1).to({rotation:-6.4228,x:1015.55,y:485.65},1).to({regY:-219.5,rotation:-9.0586,x:1019,y:485.75},1).to({rotation:-11.3429,x:1021.95},1).to({regX:0.1,regY:-219.6,rotation:-13.3019,x:1024.55,y:485.7},1).to({regX:-0.1,regY:-219.5,rotation:-14.9608,x:1026.6,y:485.85},1).to({regX:0,rotation:-16.3429,x:1028.5},1).to({regY:-219.6,scaleX:0.9999,scaleY:0.9999,rotation:-17.4752,x:1029.9,y:485.8},1).to({regX:0.1,scaleX:1,scaleY:1,rotation:-18.3824,x:1031.2,y:485.75},1).to({regX:-0.1,regY:-219.5,scaleX:0.9999,scaleY:0.9999,rotation:-19.0877,x:1031.95,y:485.95},1).to({regX:0,rotation:-19.617,x:1032.75,y:485.9},1).to({regY:-219.6,scaleX:1,scaleY:1,rotation:-19.9978,x:1033.2,y:485.85},1).to({regX:0.1,regY:-219.5,scaleX:0.9999,scaleY:0.9999,rotation:-20.2523,x:1033.7,y:485.9},1).to({regY:-219.6,rotation:-20.4069,x:1033.85,y:485.8},1).to({rotation:-20.4864,x:1033.95},1).to({regX:-0.1,regY:-219.5,rotation:-20.5151,x:1033.85,y:486},1).to({regX:0.1,scaleX:1,scaleY:1,rotation:-20.5212,y:485.85},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-20.5185,y:485.8},1).to({regY:-219.4,rotation:-20.4933,x:1033.75,y:485.85},1).to({rotation:-20.4261,x:1033.4},1).to({regY:-219.5,rotation:-20.2974,x:1032.65},1).to({rotation:-20.0822,x:1031.55},1).to({rotation:-19.7617,x:1029.8,y:485.9},1).to({regX:0.2,rotation:-19.3153,x:1027.55,y:485.95},1).to({regY:-219.4,rotation:-18.7206,x:1024.45,y:486.15},1).to({regX:0.1,regY:-219.5,rotation:-17.9566,x:1020.25},1).to({regX:0.2,scaleX:1,scaleY:1,rotation:-17.0032,x:1015.3,y:486.25},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-15.8381,x:1009.1,y:486.4},1).to({rotation:-14.4406,x:1001.65,y:486.55},1).to({regX:0.1,rotation:-12.7909,x:992.75,y:486.8},1).to({rotation:-10.8646,x:982.6,y:487.05},1).to({regX:0.2,scaleX:1,scaleY:1,rotation:-8.6465,x:970.85,y:487.25},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-6.1091,x:957.4,y:487.7},1).to({scaleX:1,scaleY:1,rotation:-3.234,x:942.1,y:488},1).to({regX:0,regY:-219.6,rotation:0,x:924.85,y:488.4},1).to({regY:-219.5,rotation:3.5089,x:919.45,y:487.7},1).to({rotation:6.6287,x:914.65,y:487},1).to({regX:-0.1,regY:-219.6,rotation:9.3826,x:910.35,y:486.25},1).to({regX:0.1,regY:-219.5,rotation:11.7916,x:906.8,y:485.9},1).to({regX:0,regY:-219.6,rotation:13.881,x:903.5,y:485.25},1).to({regY:-219.5,rotation:15.6713,x:900.75,y:484.95},1).to({regX:-0.1,regY:-219.6,rotation:17.1882,x:898.35,y:484.5},1).to({regX:0.1,regY:-219.5,rotation:18.4518,x:896.5,y:484.4},1).to({regX:0,regY:-219.6,rotation:19.4873,x:894.9,y:484.05},1).to({regX:0.1,rotation:20.3159,x:893.7,y:483.9},1).to({regX:0,rotation:20.9614,x:892.55,y:483.7},1).to({rotation:21.446,x:891.85,y:483.6},1).to({rotation:21.7941,x:891.35,y:483.5},1).to({regX:-0.1,regY:-219.5,rotation:22.0268,x:890.85,y:483.55},1).to({regX:0,regY:-219.6,rotation:22.1683,x:890.75,y:483.4},1).to({rotation:22.2412,x:890.6},1).to({rotation:22.2675,x:890.55},1).to({regX:0.1,regY:-219.5,rotation:22.2722},1).to({regX:0.2,rotation:22.2682,x:890.6,y:483.5},1).to({scaleX:0.9999,scaleY:0.9999,rotation:22.2427,x:890.8},1).to({regX:0.1,rotation:22.169,x:891,y:483.45},1).to({scaleX:1,scaleY:1,rotation:22.0282,x:891.7,y:483.5},1).to({rotation:21.7956,x:892.9,y:483.55},1).to({scaleX:0.9999,scaleY:0.9999,rotation:21.4478,x:894.6,y:483.6},1).to({scaleX:1,scaleY:1,rotation:20.962,x:897},1).to({rotation:20.3173,x:900.2,y:483.65},1).to({rotation:19.4887,x:904.35,y:483.75},1).to({rotation:18.454,x:909.45,y:483.85},1).to({regX:0.2,rotation:17.1896,x:915.85,y:483.9},1).to({regX:0.1,rotation:15.6735,x:923.3,y:484.1},1).to({regX:0.2,scaleX:0.9999,scaleY:0.9999,rotation:13.8823,x:932.25,y:484.25},1).to({regX:0.1,scaleX:1,scaleY:1,rotation:11.7919,x:942.55,y:484.4},1).to({rotation:9.3827,x:954.45,y:484.6},1).to({rotation:6.6295,x:968.15,y:484.8},1).to({regX:0.2,rotation:3.5099,x:983.75,y:485.1},1).to({regX:0,regY:-219.6,rotation:0,x:1001.1,y:485.4},1).wait(1));

	// Фон
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E001B").s().p("Eg54BEvQAmlNAAk+MAAAgjQQAAlRgmlDMB0hAAAQgmFHAAFNMAAAAjQQAAE5AmFSgEghYAwaMBDXAAAIAAu8MhDXAAAgEg/3ADlQAdlhAAlYQAAk7gdlFMAzaAAAIAAtwMg5iAAAQAnluAAlpQAAlpgnluMA5YAAAQAAnMhDnwQJABgSyAAQCsAAAABWQAABDhpBpQh9BgAAC/IAAE7MA4yAAAQgmFqAAFtQAAFuAmFpMg4yAAAIAANwMAzaAAAQgnFHABE5QgBFWAnFjg");
	this.shape.setTransform(1043,438.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1504.4,514.1,-13.400000000000091,415.5);
// library properties:
lib.properties = {
	id: 'D69344BB7F01004FAF5C8AFE689467F2',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/scene4_atlas_1.png", id:"scene4_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D69344BB7F01004FAF5C8AFE689467F2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;