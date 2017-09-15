// Generated by CoffeeScript 1.12.5
(function() {
  var Adapter, Stylus, flatten, nodefn, sourcemaps,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Adapter = require('../../adapter_base');

  sourcemaps = require('../../sourcemaps');

  nodefn = require('when/node/function');

  flatten = require('lodash.flatten');

  Stylus = (function(superClass) {
    extend(Stylus, superClass);

    function Stylus() {
      return Stylus.__super__.constructor.apply(this, arguments);
    }

    Stylus.prototype.name = 'stylus';

    Stylus.prototype.extensions = ['styl'];

    Stylus.prototype.output = 'css';

    Stylus.prototype._render = function(str, options) {
      var base, defines, i, imports, includes, j, k, l, len, len1, len2, m, obj, plugins, rawDefines, sets, v;
      sets = {};
      defines = {};
      rawDefines = {};
      includes = [];
      imports = [];
      plugins = [];
      if (options.sourcemap === true) {
        options.sourcemap = {
          comment: false
        };
      }
      for (k in options) {
        v = options[k];
        switch (k) {
          case 'define':
            Object.assign(defines, v);
            break;
          case 'rawDefine':
            Object.assign(rawDefines, v);
            break;
          case 'include':
            includes.push(v);
            break;
          case 'import':
            imports.push(v);
            break;
          case 'use':
            plugins.push(v);
            break;
          case 'url':
            if (typeof v === 'string') {
              obj = {};
              obj[v] = this.engine.url();
              Object.assign(defines, obj);
            } else {
              obj = {};
              obj[v.name] = this.engine.url({
                limit: v.limit != null ? v.limit : 30000,
                paths: v.paths || []
              });
              Object.assign(defines, obj);
            }
            break;
          default:
            sets[k] = v;
        }
      }
      includes = flatten(includes);
      imports = flatten(imports);
      plugins = flatten(plugins);
      base = this.engine(str);
      for (k in sets) {
        v = sets[k];
        base.set(k, v);
      }
      for (k in defines) {
        v = defines[k];
        base.define(k, v);
      }
      for (k in rawDefines) {
        v = rawDefines[k];
        base.define(k, v, true);
      }
      for (j = 0, len = includes.length; j < len; j++) {
        i = includes[j];
        base.include(i);
      }
      for (l = 0, len1 = imports.length; l < len1; l++) {
        i = imports[l];
        base["import"](i);
      }
      for (m = 0, len2 = plugins.length; m < len2; m++) {
        i = plugins[m];
        base.use(i);
      }
      return nodefn.call(base.render.bind(base)).then(function(res) {
        return obj = {
          result: res
        };
      }).then(function(obj) {
        if (base.sourcemap) {
          return sourcemaps.inline_sources(base.sourcemap).then(function(map) {
            obj.sourcemap = map;
            return obj;
          });
        } else {
          return obj;
        }
      });
    };

    return Stylus;

  })(Adapter);

  module.exports = Stylus;

}).call(this);
