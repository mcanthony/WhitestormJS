/**
 * © Alexander Buzin, 2014-2015
 * Site: http://alexbuzin.me/
 * Email: alexbuzin88@gmail.com
*/

/**
 * Wagner.
 *
 * @param {Object} wagnerjs *WAGNER.JS*. (REQUIRED)
 * @param {Object} type Type of wagner effect. (REQUIRED)
 * @param {Object} params Parameters. (OPTIONAL)
 * @return {Object} Scope.
 */
WHS.init.prototype.addWagner = function(wagnerjs, type, params) {
  'use strict';

  var scope = {};

  //api.def(params.hex, 0x000000); //, this.hex);
  //api.def(params.near, 0.015); //, this.near);
  //api.def(params.far, 1000); //, this.far);
  //api.def(params.density, 0.00025); //, this.density);

  switch (type) {
    case "zoomBlurPass":
      scope.effect = new wagnerjs.ZoomBlurPass();
      scope.effect.params.strength = .05;

      scope.effect.params.center.set(
        .5 * this.composer.width,
        .5 * this.composer.height
      );

      this.composer.pass(scope.effect);
      break;

    case "multiPassBloomPass":
      scope.effect = new wagnerjs.MultiPassBloomPass();
      scope.effect.params.blurAmount = 1.32;
      scope.effect.params.strength = .5;
      scope.effect.params.applyZoomBlur = true;
      scope.effect.params.zoomBlurStrength = 0.84;
      scope.effect.params.useTexture = true;

      scope.effect.glowTexture = wagnerjs.Pass.prototype.getOfflineTexture(
        this.composer.width,
        this.composer.height,
        false
      );

      scope.effect.params.center.set(
        .5 * this.composer.width,
        .5 * this.composer.height
      );

      this.composer.pass(scope.effect);
      break;

    case "vignettePass":
      scope.effect = new wagnerjs.VignettePass();
      scope.effect.params.amount = 0.7;
      scope.effect.params.falloff = 0.2;
      this.composer.pass(scope.effect);
      break;

    case "directionalBlurPass":
      scope.effect = new wagnerjs.DirectionalBlurPass();
      scope.effect.params.delta = 0.1;
      this.composer.pass(scope.effect);
      break;

    case "motionBlurPass":
      scope.motionBlurEffect = new wagnerjs.DirectionalBlurPass();
      scope.motionBlurEnable = true;
      scope.motionBlurEffect.params.delta = 0;
      scope.effect = scope.motionBlurEffect;
      this.composer.pass(scope.effect);
      break;
  }

  //this.composer.eff.push(this.effect);
  this.composer.toScreen();

  scope.composer = this.composer;

  scope.apply = function() {
    this.composer.eff.push(scope.effect);
    return scope;
  }

  return scope;
}
