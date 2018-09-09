<?php
  function generateEmail($type, $args) {
    $output = '<html><head><link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" /></head><body>';
    $output .= '<div class="container" style="max-width: 600px;margin: 20px auto;display: block;padding: 20px;background: white;min-height: 600px;border-radius: 10px;box-shadow: 0 5px 10px rgba(0,0,0,.2);color: rgba(7, 30, 34, 1);font-family: sans-serif;font-size: 14px;">';
    if ($type === 'response') {
      $output .= '<h1 style="font-weight: bold;margin: 0; font-size: 32px">SPORTECH</h1>';
      $output .= '<hr style="max-width: 100px;display: block;margin: 20px auto 20px 0;" />';
      $output .= '<h2 style="font-weight: 300;">' . $args['name'] . ', hvala za prijavo na tekmovanje.</h2>';
      $output .= '<hr style="max-width: 100px;display: block;margin: 20px auto 20px 0;" />';
      $output .= '<div class="content" style="padding: 10px;">';
        $output .= '<p>Naša ekipa vas bo kontaktirala v najkrašem možnem času z dodatnimi pojasnili in informacijami o poteku tekmovanja in dogodku samem.</p>';
        $output .= '<p>Lep pozdrav, <strong>ekipa Sportech</strong>.</p>';
      $output .= '</div>';
    }
    if ($type === 'notify_owners') {
      $output .= '<h1 style="font-weight: bold;margin: 0; font-size: 32px">Sportech</h1>';
      $output .= '<hr />';
      $output .= '<h2 style="font-weight: 300;">Prijava tekmovalca na dogodek</h2>';
      $output .= '<hr />';
      $output .= '<div class="content" style="padding: 10px;">';
        $output .= '<p><strong>Ime in priimek: </strong> '.$args['name'].'</p>';
        if ($args['age']) {
          $output .= '<p><strong>Starost: </strong> '.$args['age'].'</p>';
        }
        $output .= '<p><strong>Email: </strong><a href="mailto:';
          $output .= $args['email'];
        $output .='" style="color: #28afb0;font-weight: bold;text-decoration: none;"> '.$args['email'].'</a></p>';
        $output .= '<p><strong>Telefonska številka: </strong><a href="tel:'.$args['phone'].'" style="color: #28afb0;font-weight: bold;text-decoration: none;">'.$args['phone'].'</a></p>';
        $output .= '<hr style="max-width: 100px;display: block;margin: 20px auto 20px 0;" />';
        $output .= '<div class="reply-now" style="display: block;margin: 20px auto;text-align: center;">';
          $output .= '<a href="mailto:'.$args['email'].'" style="color: #ffffff;font-weight: bold;text-decoration: none;background: #28afb0;padding: 10px 15px;text-align: center;border-radius: 200px;display: inline;box-shadow: 0 3px 6px rgba(0,0,0,.2);transition: 300ms ease-in-out all;">Kontaktiraj osebo</a>';
        $output .= '</div>';
      $output .= '</div>';
    }
    $output .= '</div>';
    $output .= '</body></html>';
    return $output;
  }