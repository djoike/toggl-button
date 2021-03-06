/* jslint indent: 2 */
/* global $: false, document: false, togglbutton: false */
'use strict';

togglbutton.render('td.cell-buttons:not(.toggl)', { observe: true }, function (elem) {
  let projectName = '';
  const tags = [];

  const path = window.location.pathname;
  if (path.indexOf('support.asp') > 0) {
    projectName = 'support';
    tags.push($('#projectAccount option:checked').innerHTML);
  } else {
    projectName = $('#breadcrumbs > a:last-child').innerHTML;
    tags.push($('#consultant > div.content > div.row-fluid.entity > div > div:nth-child(4) > div.controls.hasText').innerHTML);
  }

  const description = $('div.top-header>h4').innerText;
  const link = togglbutton.createTimerLink({
    className: 'McbProduction',
    description: description,
    projectName: projectName,
    tags: tags
  });

  $('td.cell-buttons').appendChild(link);
});
