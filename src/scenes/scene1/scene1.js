(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scene1_atlas_1", frames: [[0,782,970,1159],[972,782,968,1157],[0,0,1553,780]]},
		{name:"scene1_atlas_2", frames: [[1185,0,750,354],[1185,356,750,354],[1450,1205,350,336],[792,1475,350,336],[0,1064,461,760],[1716,712,241,451],[0,0,760,1062],[1802,1165,167,447],[463,1064,327,761],[792,673,327,761],[1121,712,327,761],[762,0,421,671],[1144,1543,305,277],[1450,712,264,491],[0,1826,120,80],[1451,1543,120,80],[1937,0,60,71]]}
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



(lib.CachedBmp_83 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["scene1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["scene1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["scene1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPattern4 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.NewPattern4_1 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.NewPattern5 = function() {
	this.initialize(ss["scene1_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_83();
	this.instance.setTransform(-187.5,-88.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-88.6,375,177);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_82();
	this.instance.setTransform(-187.5,-88.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-88.6,375,177);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(-81.85,-190.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-190.1,163.5,380.5);


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
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(-81.85,-190.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-190.1,163.5,380.5);


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
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(-81.85,-190.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-190.1,163.5,380.5);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,484,578.5), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjRM7QiEgahuhKQhvhKhKhwQghgygWgyIAAgBIgUgwQgOgogKguQglgHgdgVQgjgZgUgqQgUgqABgsQAAgfALgXQALgYAUgNQAlgZA/ANQAdiBBMhtQgQgZgEgYQgGgdAPgSIAHgIQgvgmgWg4QgXg1AEg6QADg7Acg4QAcg4AxgrQAwgsA+gaQCAg2B8AoQB8AnAuBuQAUAxgBA1QAPgEANAEQAlALAHA/IADABIApAHQBHAOBDAeQAng2AnAKQAOAEANANQAZgvAsghQAugjA5gLQA6gMA9AOQA9AOA3AkQA2AkAoA1QBUBvgICCQgHCChfBHQgvAjhAALIACAIQAEAbgZAZQgUAUgeAMQADAfgBAVIAAALQgCA8gLA3QgIAlgIAaQBIAVAVAsQAVAsgeA3QgWAngmAaQgnAagqAEIgRABQggAAgfgMQhCBOhXAzQijBli8AAQhDAAhDgOg");
	this.shape.setTransform(132.8592,129.1612);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(45.3,45.1,175.2,168.20000000000002), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgEcAnOQlIi1lFmLQjKj1iBkoQgCgGADgDIDhl0QACgFAFgBILAh8IEijZIF2plIAAgBIACgBIACgBIABgBIABAAIABAAIABAAIACAAIACAAIABABIABABIACABIABABIAAAAIAaAtQAxiGAbgrQAQgYAPAEQAPAEADAgQAFAxgOB8QArgyAmgkIiZn+QgLgcANgcQACgGAFgHImK0WQjuBKkDA/IgoBtQgCAGgHABIgEgBQgDgCgCgEQgCgDACgEIAjhgQlhBUlbA0IhYBVQgDADgEABQgEgBgDgDQgDgCAAgFQAAgEADgDIBEhDQkLAnkWAWIgIAAIhvBKQgCACgDAAQgGAAgDgEQgCgEABgEQABgEADgDIbQyLIADgBIf0giQAEAAADAEQADADAAADQAAAFgCACQgDADgEAAIhxADIgCABQkICdklCQIBUARQAJADgBAKQgCAHgIAAIhvgXQlYColkCGIAzAyQADACAAAFQAAADgDADQgDAEgEAAQgEAAgDgEIg6g4QivBCi4A7IGKUWQAIACAHAEQAcAQAHAhIAYBRIABABIBOEFIAAAAIAjB2QBCggApAVQAmASAOA9QALAugDBDQgEBigyBhIA5C9QALAlgVAeIAaBWQABADgBADQgKAWgVAHQgGABgGAAQgQAAgMgJQgDgCgBgDIgahWIgBAAQgigOgNgjIgYhTQgsAygyAuQClFlB2FyQCFGfBJGrIAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAACIgBADIAAAAQh9C3iYB7QjICijlArQhNAOhQAAQj+AAkJiRg");
	this.shape.setTransform(235.07,310.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(45.2,45.2,379.8,531.0999999999999), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aq1Z6QjgirjlkPIgBgCIgCgBQgGgFADgHQDxofEon+QCkkZC9kdIgtghIggBsIhkgfIAziYQgcgfgXgfIhHCwIhhgpIBtjwQgdhFgMg9QgVhnAoggQAqgiBgArIDnn9IgJgLQhFhVh4h2QhFhEgTgaQgegnAOgYQANgYAzgBQAVglAegGQAlgIApArQAaAcA+BaQA9BYAWAeIAJAMIAIgSIAwAVIgSAtIAEAEIANgmIAxAPIgVBIQA4A+BQBNQBKBIAUAcQAfAqgPAgQgOAfg0ALQgSArgdAIIgLABQgcAAghgoQgVgZgzhRIgshFIhTEaIAHgCQATgBARAjQAdA+AlC6IA4hPQAGgHAHAEQADACACADIADADIFKHDIG+qTQADgEAFAAQAEgBAEADIE0E4QAEAEgCAFQhbGOh0F8QicH/hHDUQhzFZhgDQQhuDwh1CEQh9CNiXAnQg8APhAAAQkCAAk8jxgAjEs9IALAJIAGhFgAk0uOIApAbICqn3IgMgQg");
	this.shape.setTransform(115.3592,189.9373);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,230.8,379.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqOTiQjuitj5kmQF+l+EcnNQFXovCtp7IFSHPIHGqfIE1E4QhaGFh2GFQidIAhHDUQhyFYhfDOQhtDuh0CCQh6CLiVAmQg8AQhBAAQjtAAkljVg");
	mask.setTransform(114.15,146.3102);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCE57","#C8D572","#93DC8C","#66E2A2","#44E7B3","#2BEABF","#1CECC6","#17EDC9"],[0,0.145,0.31,0.467,0.62,0.761,0.894,1],83.9,-112,-41.6,99).s().p("AqOTiQjuitj5kmQF+l+EcnNQFXovCtp7IFSHPIHGqfIE1E4QhaGFh2GFQidIAhHDUQhyFYhfDOQhtDuh0CCQh6CLiVAmQg8AQhBAAQjtAAkljVg");
	this.shape.setTransform(114.15,146.3102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,228.3,292.6), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlwQPQjvitjtkiQjKj0iAknIDhl0ILDh9IEkjbIF4pmQgWFaA/FOQBVHGDuGZQChEXDfD0QhyCoiMB3QjPCvjuAsQhPAPhQAAQlMAAlgj/g");
	mask.setTransform(117.45,129.4108);

	// Layer_3
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(136.6,3.25,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(136.6,3.3,98.30000000000001,245.5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlwQPQjvitjtkiQjKj0iAknIDhl0ILDh9IEkjbIF4pmQgWFaA/FOQBVHGDuGZQChEXDfD0QhyCoiMB3QjPCvjuAsQhPAPhQAAQlMAAlgj/g");
	mask.setTransform(117.45,129.4108);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCE57","#CCD570","#8CDD8F","#5AE4A8","#35E9BA","#1FECC5","#17EDC9"],[0,0.161,0.384,0.588,0.765,0.91,1],-83.6,-42.8,74.8,17.6).s().p("AlwQPQjvitjtkiQjKj0iAknIDhl0ILDh9IEkjbIF4pmQgWFaA/FOQBVHGDuGZQChEXDfD0QhyCoiMB3QjPCvjuAsQhPAPhQAAQlMAAlgj/g");
	this.shape.setTransform(117.45,129.4108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,234.9,258.8), null);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_81();
	this.instance.setTransform(-87.6,-84.1,0.5,0.5);

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(-0.05,0.1,1,1,0,0,0,132.8,129.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-132,274,268);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_80();
	this.instance.setTransform(-87.6,-84.1,0.5,0.5);

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(-0.05,0.1,1,1,0,0,0,132.8,129.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-132,274,268);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(-242.45,-289.65,0.5,0.5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(0.5,0.45,1,1,0,0,0,242,289.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.5,-336.7,583,677);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqOTiQjuitj5kmQF/l+EbnNQFYovCsp7IFSHPIHHqfIE0E4QhaGFh2GFQidIAhGDUQhzFYhfDOQhtDuh0CCQh6CLiWAmQg7AQhBAAQjtAAkljVg");
	mask.setTransform(143.6,146.3102);

	// Layer_3
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(0,1.3,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.setTransform(143.65,146.3,1,1,0,0,0,114.2,146.3);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BAE9A").s().p("AqOTiQjuitj5kmQF/l+EbnNQFYovCsp7IFSHPIHHqfIE0E4QhaGFh2GFQidIAhGDUQhzFYhfDOQhtDuh0CCQh6CLiWAmQg7AQhBAAQjtAAkljVg");
	this.shape.setTransform(143.6,146.3102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(29.5,0,228.3,292.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlwQPQjvitjtkiQjKj0iAknIDhl0ILDh9IEkjbIF4pmQgWFaA/FOQBVHGDuGZQChEXDfD0QhyCoiMB3QjPCvjuAsQhPAPhQAAQlMAAlgj/g");
	mask.setTransform(117.45,129.4108);

	// Layer_3
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(57.4,169.6,0.5,0.5);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(117.5,129.4,1,1,0,0,0,117.5,129.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BAE9A").s().p("AlwQPQjvitjtkiQjKj0iAknIDhl0ILDh9IEkjbIF4pmQgWFaA/FOQBVHGDuGZQChEXDfD0QhyCoiMB3QjPCvjuAsQhPAPhQAAQlMAAlgj/g");
	this.shape.setTransform(117.45,129.4108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,234.9,258.8), null);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_79();
	this.instance.setTransform(-114.9,-189.85,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(-14.55,64.85,1,1,0,0,0,128.8,168.5);

	this.instance_2 = new lib.CachedBmp_78();
	this.instance_2.setTransform(-115.35,-104.15,0.5,0.5);

	this.instance_3 = new lib.Group_1_1();
	this.instance_3.setTransform(0,0,1,1,0,0,0,115.4,189.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.4,-237.9,330,478);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_77();
	this.instance.setTransform(-189.95,-265.45,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.setTransform(8.3,135.15,1,1,0,0,0,134.2,129.4);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(-8.5,159.95,1,1,0,0,0,117.4,154.2);

	this.instance_3 = new lib.CachedBmp_76();
	this.instance_3.setTransform(26.35,-10.1,0.5,0.5);

	this.instance_4 = new lib.Path();
	this.instance_4.setTransform(0.05,0,1,1,0,0,0,235,310.7);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.8,-313.5,479,630);


// stage content:
(lib.scene1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Штучки
	this.instance = new lib.Tween16("synched",0);
	this.instance.setTransform(1101.2,105.95);

	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.setTransform(1101.2,105.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},38).to({state:[{t:this.instance_1}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.7255,x:1135.15,y:154},38,cjs.Ease.quadInOut).to({_off:true,rotation:0,x:1101.2,y:105.95},35,cjs.Ease.quadInOut).wait(1));

	// Голова
	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.setTransform(954.15,294.15);

	this.instance_3 = new lib.Tween15("synched",0);
	this.instance_3.setTransform(954.15,294.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},38).to({state:[{t:this.instance_3}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:329},38,cjs.Ease.quadInOut).to({_off:true,y:294.15},35,cjs.Ease.quadInOut).wait(1));

	// Тело
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(966.95,557.2);

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(966.95,590.15);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(966.95,557.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},38).to({state:[{t:this.instance_6}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,y:590.15},38,cjs.Ease.quadInOut).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},38,cjs.Ease.quadInOut).to({_off:true,y:557.2},35,cjs.Ease.quadInOut).wait(1));

	// Юбка
	this.instance_7 = new lib.Tween9("synched",0);
	this.instance_7.setTransform(948.2,447.15,1,1,0,0,0,-98,-279.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-2.7909,x:950.75,y:485.3},38,cjs.Ease.quadInOut).to({rotation:0,x:948.2,y:447.15},35,cjs.Ease.quadInOut).wait(1));

	// Рука_левая
	this.instance_8 = new lib.Tween10("synched",0);
	this.instance_8.setTransform(1000.8,382,1,1,0,0,0,-100.2,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:6.7104,x:1000.75,y:415.9},38,cjs.Ease.quadInOut).to({rotation:0,x:1000.8,y:382},35,cjs.Ease.quadInOut).wait(1));

	// Рука_правая
	this.instance_9 = new lib.Tween13("synched",0);
	this.instance_9.setTransform(891.3,388.45,1,1,0,0,0,83.7,-98.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:83.8,regY:-98.1,rotation:5.2855,x:891.35,y:420.9},38,cjs.Ease.quadInOut).to({regX:83.7,regY:-98.2,rotation:0,x:891.3,y:388.45},35,cjs.Ease.quadInOut).wait(1));

	// Фон
	this.instance_10 = new lib.CachedBmp_67();
	this.instance_10.setTransform(562.35,286.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1522.4,507.6,-138.9000000000001,606.3000000000001);
// library properties:
lib.properties = {
	id: '70D0FD6FBCDF0D41911E0DF043A416CD',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/scene1_atlas_1.png", id:"scene1_atlas_1"},
		{src:"images/scene1_atlas_2.png", id:"scene1_atlas_2"}
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
an.compositions['70D0FD6FBCDF0D41911E0DF043A416CD'] = {
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