
function updateStatus(cronExpression)
{
   var cronFields = cronExpression.split(" ");

   var table = jQuery('<table/>');
   var head = jQuery('<thead/>');
   var hr = jQuery('<tr/>');
   var h0 = jQuery('<th/>').text('Type');
   var ha = jQuery('<th/>').text('Raw');
   var h1 = jQuery('<th/>').text('Seconds');
   var h2 = jQuery('<th/>').text('Minutes');
   var h3 = jQuery('<th/>').text('Hours');
   var h4 = jQuery('<th/>').text('Day of Month');
   var h5 = jQuery('<th/>').text('Month');
   var h6 = jQuery('<th/>').text('Day of Week');
   hr.append(h0).append(ha).append(h1).append(h2).append(h3).append(h4).append(h5).append(h6);
   head.append(hr);
   table.append(head);

   var body = jQuery('<tbody/>');
   var r1 = jQuery('<tr/>');
   var c10 = jQuery('<td/>').text('cron');
   var c1a = jQuery('<td/>').text(cronExpression);
   var c11 = jQuery('<td/>').text('N/A');
   var c12 = jQuery('<td/>').text(cronFields[0]);
   var c13 = jQuery('<td/>').text(cronFields[1]);
   var c14 = jQuery('<td/>').text(cronFields[2]);
   var c15 = jQuery('<td/>').text(cronFields[3]);
   var c16 = jQuery('<td/>').text(cronFields[4]);
   r1.append(c10).append(c1a).append(c11).append(c12).append(c13).append(c14).append(c15).append(c16);
   body.append(r1);

   var r2 = jQuery('<tr/>');
   var c20 = jQuery('<td/>').text('quartz');
   var c2a = jQuery('<td/>').text('* ' + cronExpression);
   var c21 = jQuery('<td/>').text('*');
   var c22 = jQuery('<td/>').text(cronFields[0]);
   var c23 = jQuery('<td/>').text(cronFields[1]);
   var c24 = jQuery('<td/>').text(cronFields[2]);
   var c25 = jQuery('<td/>').text(cronFields[3]);
   var c26 = jQuery('<td/>').text(cronFields[4]);
   r2.append(c20).append(c2a).append(c21).append(c22).append(c23).append(c24).append(c25).append(c26);
   body.append(r2);

   table.append(body);
   table.attr('border','1');
   jQuery('#example-cron').empty();
   jQuery('#example-cron').append(table);
}

function setupCron()
{
   // quartz has a seconds field that jQuery cron does not
   jQuery('#selector').cron(
   {
      useGentleSelect: false,
      initial: '0/15 * * * ?',
      onChange: function()
      {
         var cronExpression = jQuery(this).cron('value');
         updateStatus(cronExpression);
      },
      customValues:
      {
         '5 minutes' : '0/5 * * * ?',
         '15 minutes' : '0/15 * * * ?',
         '30 minutes' : '0/30 * * * ?'
      }
   });
}

jQuery(document).ready(function()
{
   setupCron();
});
