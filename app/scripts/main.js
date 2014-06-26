/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function () {
    var feed = new Instafeed({
        get: 'user',
        userId: 1407586555,
        accessToken: '1407586555.467ede5.b264a093e3104e52aaa6d3da05e00ef7',
        template: '<div class="tile"><img src="{{image}}" /></div>',
        resolution: 'standard_resolution'
    });
    feed.run();
})();