-- Insert sample data in the L10n table
INSERT INTO l10n (id, locale, lic, value)
VALUES (L10n_id_seq.nextval, 'EN', 'test.test', 'test'),
       (L10n_id_seq.nextval, 'BG', 'test.test', 'тест'),
       (L10n_id_seq.nextval, 'EN', 'test.first', 'first'),
       (L10n_id_seq.nextval, 'BG', 'test.first', 'първи'),
       (L10n_id_seq.nextval, 'EN', 'test.second', 'second'),
       (L10n_id_seq.nextval, 'BG', 'test.second', 'втори'),
       (L10n_id_seq.nextval, 'EN', 'sample.checkBox', 'check box'),
       (L10n_id_seq.nextval, 'BG', 'sample.checkBox', 'отметка'),
       (L10n_id_seq.nextval, 'EN', 'sample.title', 'title'),
       (L10n_id_seq.nextval, 'BG', 'sample.title', 'титла'),
       (L10n_id_seq.nextval, 'EN', 'sample.plainText', 'Plain text'),
       (L10n_id_seq.nextval, 'BG', 'sample.plainText', 'обикновен текст'),
       (L10n_id_seq.nextval, 'EN', 'sample.button', 'Button'),
       (L10n_id_seq.nextval, 'BG', 'sample.button', 'бутон'),
       (L10n_id_seq.nextval, 'EN', 'sample.textArea', 'Text Area'),
       (L10n_id_seq.nextval, 'BG', 'sample.textArea', 'Текстова област'),
       (L10n_id_seq.nextval, 'EN', 'sample.radioButton', 'Radio Button'),
       (L10n_id_seq.nextval, 'BG', 'sample.radioButton', 'Радио бутон'),
       (L10n_id_seq.nextval, 'EN', 'sample.comboBox', 'Combo box'),
       (L10n_id_seq.nextval, 'BG', 'sample.comboBox', 'Комбинирана кутия'),
       (L10n_id_seq.nextval, 'EN', 'sample.switch', 'Switch'),
       (L10n_id_seq.nextval, 'BG', 'sample.switch', 'Превключвател');


