/*
 * Copyright (c) 2016-2020 Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 *
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

import {} from "piu/MC";

const blackSkin = new Skin({ fill:"black" });
const whiteSkin = new Skin({ fill:"white" })
const blueSkin = new Skin({ fill:"#CCE7FF" });
const textStyle = new Style({ font:"myFont", left:10, right:10, top:15, bottom:15 });
const centerStyle = new Style({ horizontal:"center" });
const leftStyle = new Style({ horizontal:"left" });
const redStyle = new Style({ color:["red","blue"] });

let MyApplication = Application(null, {
	skin:whiteSkin, style:textStyle,
	Behavior: class extends Behavior {
		onDisplaying(application) {
			if (application.height != 320 || application.width != 240)
				trace("WARNING: This application was designed to run on a 320x240 screen.\n");
		}
	},
	contents: [
	],
});

class ButtonBehavior extends Behavior {
	onCreate(content) {
		trace("Button created\n");
	}
	onTouchBegan(content, id, x, y, ticks) {
		trace("Touch began\n");
	}
	onTouchEnded(content, id, x, y, ticks) {
		trace("Touch ended\n");
	}
	onTouchMoved(content, id, x, y, ticks) {
		trace("Touch moved\n");
	}
}

const LabeledButton = Container.template($ => ({
		left:16, right:16, top:8, height: 44, skin:blueSkin, style:centerStyle,
		contents: [
			Label(null, {
				string: $.label,
				style: textStyle,
				active:true,
				Behavior: class extends Behavior {
				onCreate(content) {
					trace("Button " + $.label + " created\n");
				}
				onTouchBegan(content, id, x, y, ticks) {
					trace("Touch " + $.label + " began\n");
				}
				onTouchEnded(content, id, x, y, ticks) {
					trace("Touch " + $.label + " ended\n");
				}
				onTouchMoved(content, id, x, y, ticks) {
					trace("Touch " + $.label + " moved\n");
				}
			}
		})
	],
}));

const HomeScreen = new Column(null, {
	top: 0, bottom: 0, left: 0, right: 0,
});

HomeScreen.add(new LabeledButton({ label: "Connect" }));
HomeScreen.add(new LabeledButton({ label: "Inventory" }));
MyApplication.add(HomeScreen);

export default MyApplication;
