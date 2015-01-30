/*
 * The MIT License
 *
 * Copyright (c) 2015, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

angular.module('adf.widgets.clock', ['adf.provider'])
  .config(function(dashboardProvider, widgetPath){
    dashboardProvider
      .widget('clock', {
        title: 'Clock',
        description: 'Displays date and time',
        templateUrl: widgetPath + 'clock/src/view.html',
        controller: 'clockCtrl',
        controllerAs: 'clock',
        edit: {
          templateUrl: widgetPath + 'clock/src/edit.html',
        }
      });
  })
  .controller('clockController', function($interval, config){
    var clock = this;

    setDateAndTime function(){
      var d = new Date();
      clock.time = d.format(config.timePattern);
      clock.date = d.format(config.datePattern);
    }
    
    setDateAndTime();
    // refresh every second
    $interval(setDateAndTime, 1000);
  });
