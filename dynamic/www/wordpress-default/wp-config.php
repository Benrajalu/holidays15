<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress_default');

/** MySQL database username */
define('DB_USER', 'wp');

/** MySQL database password */
define('DB_PASSWORD', 'wp');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'V9!ssr%&tqqB;3Bj},Stb;+&(`xtZ!$zh4PaB$`*>uj}%nOQ:UbxG=oi+_X_:1X_');
define('SECURE_AUTH_KEY',  'sI,X#>sUn2[k)EN.i.@ %8XD!!0XR8&-}QQF 8)JYSfgo6`*Z~;?U!{+zkuOIm&5');
define('LOGGED_IN_KEY',    '?0_l3BS1S!~?KL))Uz#u,xVo,#Srx9mm/GwoK1-!jHBUW[fn15A;iU,N<[z2}oBj');
define('NONCE_KEY',        'txc`W+xs%:c4WQYB{]OJ=e.|G@su6<gx|)hNDR,-kwvzaF1fYJhN9-K~u,x}Vo+a');
define('AUTH_SALT',        'ova#V~Fmg_yGsMB_W6/VAXwIjGVc+OPZUc&pm:!~))457Np)3`[n|E,,lS]axjb+');
define('SECURE_AUTH_SALT', 'nQF[GS{+%L<r.@E?{L=P>fQqjOR(#~d&}#tgPC~W~b=4gQd`1wmD+./3Y(OMEen}');
define('LOGGED_IN_SALT',   '8k@]%tY.WW#e-p$]06S_-GL`8Y.&xGL>)_):Y[Q-kbm7/Mqi7%0hN]`C*98wbpGk');
define('NONCE_SALT',       'S<qyjTsj0EST=:^zpZaC6-/W/I&CM(~%|LZWoP9*Ts8$S@*Pu*sSjv8{POlV$i8Y');


$table_prefix = 'wp_';


// Match any requests made via xip.io.
if ( isset( $_SERVER['HTTP_HOST'] ) && preg_match('/^(local.wordpress.)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(.xip.io)\z/', $_SERVER['HTTP_HOST'] ) ) {
	define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] );
	define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] );
}

define( 'WP_DEBUG', true );



/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
