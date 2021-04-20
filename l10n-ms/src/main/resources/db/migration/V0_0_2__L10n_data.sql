-- Insert sample data in the L10n table
INSERT INTO l10n (id, locale, lic, value)
VALUES (L10n_id_seq.nextval, 'EN', 'test.test', 'test'),
       (L10n_id_seq.nextval, 'BG', 'test.test', 'тест'),
       (L10n_id_seq.nextval, 'EN', 'test.first', 'first'),
       (L10n_id_seq.nextval, 'BG', 'test.first', 'първи'),
       (L10n_id_seq.nextval, 'EN', 'test.second', 'second'),
       (L10n_id_seq.nextval, 'BG', 'test.second', 'втори');

