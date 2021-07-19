SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `autos` (
`id` int(255) NOT NULL,
`marca` varchar(100) NOT NULL,
`modelo` varchar(10) NOT NULL,
`color` varchar(100) NOT NULL,
`ano` int(255) NOT NULL,
`precio` decimal(10,2) NOT NULL

) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 AUTO_INCREMENT=1 ;

INSERT INTO `autos` (`id`, `marca`, `modelo`, `color`, `ano`, `precio`) VALUES
(1, 'Mercedes Benz', 'SL 500',     'Gris',   2000, 50000 ),
(2, 'Mercedes Benz', 'Coupé',      'Negro',  2021, 60000 ),
(3, 'Ford',          'Mustang',    'Azul',   1995, 35000 ),
(4, 'Ford',          'Fiesta',     'Blanco', 2012, 7500  ),
(5, 'Peugeot',       '208',        'Azul',   2001, 3700  ),
(6, 'Ferrari',       'Testarossa', 'Rojo',   1984, 23000 );

ALTER TABLE `autos`
 ADD PRIMARY KEY (`id`);

ALTER TABLE `autos`
MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;
