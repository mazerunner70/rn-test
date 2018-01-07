function CreateTableView(objArray, theme, enableHeader) {
            // set optional theme parameter
            if (theme === undefined) {
                theme = 'mediumTable'; //default theme
            }

            if (enableHeader === undefined) {
                enableHeader = true; //default enable headers
            }

            // If the returned data is an object do nothing, else try to parse
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

            var str = '<table class="' + theme + '">';

            // table head
            if (enableHeader) {
                str += '<thead><tr>';
                for (var index in array[0]) {
                    str += '<th scope="col">' + index + '</th>';
                }
                str += '</tr></thead>';
            }

            // table body
            str += '<tbody>';
            for (var i = 0; i < array.length; i++) {
                str += (i % 2 == 0) ? '<tr class="alt">' : '<tr>';
                for (var index in array[i]) {
                    str += '<td>' + array[i][index] + '</td>';
                }
                str += '</tr>';
            }
            str += '</tbody>'
            str += '</table>';
            return str;
        }


        $(document).ready(function () {
            var originalData = [
            { "dependency": { "name": "Rasbian", "curr_ver": 1, "last_update": "010-02-18T17:59:41", "new_ver": 60, "last_check": "010-02-18T17:59:41"} },
            { "dependency": { "name": "Rasbian", "curr_ver": 1, "last_update": "010-02-18T17:59:41", "new_ver": 60, "last_check": "010-02-18T17:59:41"} },
            { "dependency": { "name": "Rasbian", "curr_ver": 1, "last_update": "010-02-18T17:59:41", "new_ver": 60, "last_check": "010-02-18T17:59:41"} },
        ];

            var data = $.map(originalData, function (ele) {
                return { name: ele.dependency.name, 
			curr_ver : ele.dependency.curr_ver,   
			last_update : ele.dependency.last_update,   
			new_ver : ele.dependency.new_ver,   
			last_check : ele.dependency.last_check };
            });

            $('#dependencies').append(CreateTableView(data, 'blueTable', true));
        });
